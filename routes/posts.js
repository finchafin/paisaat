const express = require('express');

const postController = require('../controllers/posts');
const jwtHandler = require("../controllers/jwtHandler");

const router = express.Router();

router.post('/createpost', postController.postCreatePost);

router.get('/getfollowerspost/:userid', postController.getAllFollowersPost);

router.get('/trendingPosts', postController.getTrendingPosts);

module.exports = router;
