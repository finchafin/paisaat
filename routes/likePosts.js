const express = require('express');

const likeController = require('../controllers/likePosts');

const router = express.Router();

router.post('/likePost', likeController.postLikePost);

router.post('/unlikePost', likeController.postUnlikePost);

module.exports = router;