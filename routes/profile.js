const express = require('express');

const profileController = require('../controllers/profile');

const router = express.Router();

router.get('/userDetails/:userid', profileController.getUserDetails);

router.get('/usersAllPost/:userid', profileController.getUsersAllPosts);

router.post('/updateBio', profileController.postUpdateBio);

module.exports = router;