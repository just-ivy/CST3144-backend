const express = require('express');
const router = express.Router();
const controller = require('../controller/searchController');

router.get('/', controller.searchLessons);

module.exports = router;
