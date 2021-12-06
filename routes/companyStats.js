const express = require('express');

const companyStatsController = require('../controllers/companyStats');

const router = express.Router();

router.get('/companystats/bonds', companyStatsController.getBonds);

router.get('/companystats/properties', companyStatsController.getPropertiesData);

router.get('/companystats/crypto', companyStatsController.getCryptoData);

router.get('/companystats/fd', companyStatsController.getFDdata);

router.get('/companystats/commodities', companyStatsController.getCommodities);

router.get('/companystats/mutualfunds', companyStatsController.getMutualFunds);

router.get('/companystats/investing/:name', companyStatsController.getCompanyStats);


module.exports = router;