const express = require('express');

const loginController = require('../controllers/login');

const router = express.Router();

router.post('/login', loginController.postLogin);

router.post('/signup', loginController.postSignup);

module.exports = router;