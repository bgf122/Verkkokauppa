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
            ref: 'Category'
        }],
        price: {
            type: Number,
            required: true
        },
        images: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Image'
        }],
        productDescription: {
            type: String,
        }
    })
)

module.exports = Product