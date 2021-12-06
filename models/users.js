const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    default: null
  },
  phone: {
    type: String,
    default: ""
  },
  imageUrl: {
    type: String,
    default: null
  },
  bio: {
    type: String,
    default: null
  },
  following: {
    type: Array,
    default: []
  },
  followers: {
    type: Array,
    default: []
  }
});

module.exports = mongoose.model("User", userSchema);

