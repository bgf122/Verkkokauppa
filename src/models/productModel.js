const mongoose = require('mongoose')

const { Schema } = mongoose

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: [{
        _id: Number,
        name: String,
    }],
    price: {
        type: Number,
        required: true
    },
    images: [{
        data: Buffer,
        type: String
    }],
    description: {
        type: String,
    }
})

module.exports = mongoose.model('Product', productSchema, 'products')