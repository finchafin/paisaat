const express = require('express');

const snfController = require('../controllers/searchAndFollow');

const router = express.Router();

router.post('/search', snfController.getSearch);

router.post('/addfollowing', snfController.postAddFollower);

module.exports = router;
