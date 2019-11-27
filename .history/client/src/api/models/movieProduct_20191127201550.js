const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    year: Number,
    poster: String
});

module.exports = mongoose.model('MovieProduct', productSchema);