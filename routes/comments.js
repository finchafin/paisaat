const express = require('express');

const commentsController = require('../controllers/comments');

const router = express.Router();

router.post('/getComments', commentsController.postGetComments);

router.post('/comment', commentsController.postComment);

module.exports = router;