const mongoose = require('mongoose')

const Product = mongoose.model(
    'Product',
    new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        categories: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            default: undefined
        }],
        price: {
            type: Number,
            required: true
        },
        images: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Images'
        }],
        productDescription: {
            type: String,
        }
    })
)

module.exports = Product