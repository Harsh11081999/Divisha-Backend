const express = require('express');
const sellerController = require('../controllers/seller_controller');
const router = express.Router();

router.get('/:id', sellerController.getSpecificSellerDetails);


module.exports = router;