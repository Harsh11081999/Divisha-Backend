const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },
    subCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subCategory'
    },
    productName: {
        type: String,
        required: true
    },
    MRP: {
        type: String,
        required: true
    },
    SellingPrice: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    productImage: {
        type: String
    }

}, {
    timestamps: true
});


const Inventory = mongoose.model("inventory", inventorySchema);
module.exports = Inventory;
