const express = require('express');
const router = express.Router();

const homeController = require('./modules/controllers/homeController');

router.get('/', homeController.homePage);

module.exports = router;