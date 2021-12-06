const User = require("../models/users");

exports.getSearch = async (req, res, next) => {
  const text = req.body.searchText;
  const userId = req.body.userId;

  try {
    // fetching all the user that has the letters in their name
    const userNames = await User.find(
      { name: { $regex: text, $options: "i" } },
      { name: 1 }
    );

    // Fetching users following details
    const userFollowing = await User.findById(userId, "following");

    // Creating a list by distinguishing if the user follow the user in the list or not
    // if follows : following is true else false
    const data = [];
    userNames.forEach((user) => {
      if (userFollowing.following.includes(user._id)) {
        data.push({ id: user._id, name: user.name, following: true });
      } else {
        data.push({ id: user._id, name: user.name, following: false });
      }
    });

    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error", err: err });
  }
};

exports.postAddFollower = async (req, res, next) => {
  const userId = req.body.userId;
  const followUserId = req.body.follow;

  if (userId === followUserId) {
    res.status(201).json({ msg: "Same User" });
  }

  try {
    // Fetching all the users followers
    const userDetails = await User.findById(userId, "following");

    // Checking if the user allready follows him
    // If yes - user is unfollowed
    // If not - the user will be added to follower list
    if(userDetails.following.includes(followUserId)){
      console.log("Allready following - now unfollow");
      // Removing the user being followed
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        {
          $pull: { following: followUserId },
        },{
          new: true
        }
      );

      // Also removing the user from followers namelist
      const followingUser = await User.findByIdAndUpdate(
        followUserId,
        {
          $pull: {followers: userId}
        },{
          new: true
        }
      );

    } else {
      console.log("Following user");
      // Adding the person -  user in following list
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        {
          $push: { following: followUserId },
        }, {
          new: true
        }
      );

      // Also adding the user in followwers list
      const followingUser = await User.findByIdAndUpdate(
        followUserId,
        {
          $push: {followers: userId}
        },{
          new: true
        }
      );

    }

    res.status(201).json({ msg: "Done" });
  } catch (err) {
    res.status(500).json({ msg: "Server Error", err: err });
  }
};
