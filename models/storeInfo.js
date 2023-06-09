const mongoose = require('mongoose');

const storeInfoSchema = new mongoose.Schema({
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "seller", 
        required: true
    },
    gst: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    storeTiming: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Store = mongoose.model("store", storeInfoSchema);
module.exports = Store;