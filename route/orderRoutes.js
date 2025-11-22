const express = require('express');
const router = express.Router();
const controller = require('../controller/orderController');

router.post('/', controller.createOrder);

module.exports = router;
