const express = require('express');
const storeController = require('../controllers/store_controller');
const router = express.Router();

router.post('/store/create/:id', storeController.createStore);
router.post('/store/add-category/:sellerId/:storeId', storeController.createCategory);
router.post('/store/add-sub-category', storeController.createSubCategory);
router.post('/store/add-inventory', storeController.createInventory);


module.exports = router;