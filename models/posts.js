const { ObjectID } = require("bson");
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  postText: {
    type: String,
    required: true,
  },
  postTopics: [],
  likesCount: Number,
  commentsCount: Number,
  date: { type: Date, default: Date.now },
  likes: [
    {
      type: ObjectID,
      ref: "User",
    },
  ],
  comments: [
    {
      user: {
        type: ObjectID,
        ref: "User"
      },
      text: String,
    },
  ],
  postedBy: {
    type: ObjectID,
    ref: "User",
    require: true,
  },
  imageUrl: {
    type: String,
  },
});

module.exports = mongoose.model("Post", postSchema);
