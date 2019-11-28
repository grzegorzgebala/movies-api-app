const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    _id: { 
        type: mongoose.Schema.Types.ObjectId
    },
    title :{
        type:String,
        required: '{PATH} is required!'
    },
    year: {
        type:Number
    },
    poster:{
        type:String
    }
});

module.exports = mongoose.model('MovieProduct', productSchema);
