const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    
    storeInfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "store"
    },
    categoryName: {
        type: String,
        required: true
    },
    subCategory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subCategory'
    }]
}, {
    timestamps: true
});

const Category = mongoose.model("category", categorySchema);
module.exports = Category;

