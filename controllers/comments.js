// Importing post modal
const Post = require('../models/posts');

exports.postGetComments = async (req, res, next) => {
  const postId = req.body.postId;

  try{
    const response =await Post.findById(postId, "comments").populate({path: "comments.user", select: ["name", 'imageUrl']});
    
    res.status(200).json(response.comments);
  } catch (err) {
    console.log(err);
    res.status(500).json({msg: "Server error",  err: err});
  }

};

exports.postComment =async (req, res, next) => {
  const text = req.body.text;
  const postId = req.body.postId;
  const userId = req.body.userId;

  console.log("[comment] ", text, postId, userId);
  const cmt = {user: userId, text: text};
  try{
    const post = await Post.findByIdAndUpdate(postId, {
      $push: {comments: cmt},
      $inc: {commentsCount: 1}
    }, {new: true});
    console.log(post);
    res.status(201).json({msg: "success", newComment: post.comments}); 
  } catch (err) {
    console.log(err);
    res.status(501).json({msg: "server error", err: err});
  }

};