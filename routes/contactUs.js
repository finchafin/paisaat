const express = require('express');

const contactusController = require('../controllers/contactUs') ;

const router = express.Router();

router.post('/contactus', contactusController.contactUs);

module.exports = router;