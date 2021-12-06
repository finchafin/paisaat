// Importing post modal
const Post = require('../models/posts');

// Controller to like a post
exports.postLikePost = async (req, res, next) => {
  const postId = req.body.postId;
  const userId = req.body.userId;

  try {
    // Updating the post by adding userid in likes and inc likecount 
    const response = await Post.findByIdAndUpdate(postId, {
      $push: { likes: userId },
      $inc: {likesCount: 1}
    }, {
      new: true
    });

    // Success response
    res.status(201).send({msg: "success"});
  } catch (err) {
    console.log(err);
    // database operation failed
    res.status(501).send({msg: "Server Error", err: err});
  }
};

exports.postUnlikePost =async (req, res, next) => {
  const postId = req.body.postId;
  const userId = req.body.userId;
  
  try {
    // Updating the post by removing userid in likes and dec likecount 
    const response = await Post.findByIdAndUpdate(postId, {
      $pull: { likes: userId },
      $inc: {likesCount: -1}
    }, {
      new: true
    });

    // Success response
    res.status(201).send({msg: "success"});
  } catch (err) {

    // database operation failed
    res.status(501).send({msg: "Server Error", err: err});
  }
};