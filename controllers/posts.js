const mongoose = require("mongoose");

// Importing post modal
const Post = require("../models/posts");

// Importing user modal
const User = require("../models/users");

// Handling Create post route
exports.postCreatePost = async (req, res, next) => {
  // Getting data from body
  const postText = req.body.postText;
  const postTopics = req.body.topics;
  const userId = req.body.user;
  const image = req.file;
  let imageUrl;

  if (image) {
    imageUrl = image.path;
  } else {
    imageUrl = null;
  }

  const postObj = {
    postText: postText,
    postTopics: postTopics,
    likesCount: 0,
    commentsCount: 0,
    likes: [],
    imageUrl: imageUrl,
    comments: [],
    postedBy: userId,
    date: new Date(),
  };

  // Creating New Post Modal
  const post = new Post(postObj);

  try {
    // Saving the post
    const newPost = await post.save();
    // Succes response
    res.status(201).json(newPost);
  } catch (err) {
    // Error creating post
    console.log("Cant create the post");
    res.status(400).json({ message: err.message });
  }
};

exports.getAllFollowersPost = async (req, res, next) => {
  // getting the persons email from the params
  const userId = req.params.userid;

  // console.log("Userid from cookie - jwt");
  // console.log(req.locals.userid);

  try {
    // Getting the ids of people user follows
    const user = await User.findById(userId, "following");
    const following = user.following;

    let posts;

    if (following.length > 0) {
      // IF user has any followers

      // Adding the user is so as to fetch all those posts as well simultaneously
      following.push(userId);

      // Fetching the posts from the users followers and filtering required fields
      // also populating user details who filled the data
      posts = await Post.find(
        { postedBy: { $in: following } },
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
    } else {
      // for new user

      // Finding the posts with max likes and limiting the result to 100
      posts = await Post.find({})
        .sort({ likesCount: -1, date: -1 })
        .populate({ path: "postedBy", select: ["name", "imageUrl"] })
        .limit(100);
    }
    // Sending a success message with all the posts
    res.status(201).json({ posts: posts, following: following.length});
  } catch (err) {
    console.log(err);
    // Sending an error response if we have an errro
    res.status(500).json({ msg: err.message });
  }
};

exports.getTrendingPosts = async (req, res, next) => {
  try {
    // Finding the posts with max likes and limiting the result to 100
    const posts = await Post.find({})
      .sort({ likesCount: -1, date: -1 })
      .populate({ path: "postedBy", select: ["name", "imageUrl"] })
      .limit(100);

    // Sending a success response with posts
    res.status(201).json(posts);
  } catch (err) {
    console.log(err);

    // Sending a response if something fails on the server
    res.status(501).json({ msg: "Server Error" });
  }
};

// Limiting the number of documents that we get
// db.collectionName.find( { city: "London" } ).skip( 20 ).limit( 20 );
