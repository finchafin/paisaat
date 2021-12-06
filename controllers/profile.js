//Importing the post modal
const Post = require('../models/posts');

// Importing the user modal
const User = require('../models/users');

// getting the users Details
exports.getUserDetails = async (req, res, next) => {
  const userId = req.params.userid;

  try {
    // Getting all the user details
    const userDetails = await User.findById(userId);

    const sendUserData = {
      name: userDetails.name,
      email: userDetails.email,
      _id: userDetails._id,
      bio: userDetails.bio,
      following: userDetails.following,
      followers: userDetails.followers
    }

    const sendDetails = {};

    // Sending a success response
    res.status(201).json(sendUserData);
  } catch (err) {
    console.log(err);
    res.status(501).json({msg: "Server error", err: err});
  }
}

// Getting the users all posts
exports.getUsersAllPosts = async (req, res, next) => {
  // grtting user id from params
  const userId = req.params.userid;

  try {
    // fetching the users posts and filtering the required stffs also populating the user data
    const posts = await Post.find(
      { postedBy: userId },
      {
        postTopics: 1,
        postText: 1,
        likesCount: 1,
        likes: 1,
        commentsCount: 1,
        imageUrl: 1,
        postedBy: 1,
        date: 1,
      }
    )
      .sort({ date: -1 })
      .populate({ path: "postedBy", select: ["name", "imageUrl"] });

      // Sending a success response
      // console.log(posts);
      res.status(201).json(posts);

  } catch (err) {

    console.log(err);
    // Sending a error response saying server error
    res.status(501).json({msg: "Server Error"});
  }
};

exports.postUpdateBio = async (req, res, next) => {
  const userId = req.body.userId;
  const bio = req.body.bio;

  try {
    // Updating the bio of the user
    const response = await User.findByIdAndUpdate(userId, {bio: bio});

    // Sending a success response if all goes ok
    res.status(201).json({msg: "OK"});
  } catch (err) {
    console.log(err);

    // Sending a responce for failed server response
    res.json(500).json({msg: "Server Error", err: err});
  }
}