const express = require('express');
const sellerController = require('../controllers/seller_controller');
const router = express.Router();

router.post('/register', sellerController.Register);

module.exports = router;