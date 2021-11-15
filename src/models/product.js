const mongoose = require('mongoose')

const { Schema } = mongoose

const productSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    category_id: [{
        name: String,
    }],
    price: {
        type: Number,
        required: true
    },
    images: [{
        data: Buffer,
        type: String
    }]
})

module.exports = mongoose.model('Product', productSchema, 'products')