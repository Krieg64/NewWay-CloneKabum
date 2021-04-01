const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const uuid = require('uuid')

const Product = new Schema({
    _id: {
        type: String,
        default: uuid.v4
    },
    title: { 
        type: String,
        require: true
    },
    titlePromotion: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    body: {
        type: String,
        require: true
    },
    amount: {
        type: Number,
        require: true
    },
    images: {
        type: Array,
        require:  true
    },
    tag: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

mongoose.model('products', Product)