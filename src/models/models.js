const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        default: undefined
    },
    products: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        default: undefined
    }]
})

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
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

const imageSchema = new mongoose.Schema({
    name: {
        type: String
    },
    imageDescription: {
        type: String
    },
    img: {
        type: String
    }
})

exports.Product = mongoose.model('Product', productSchema, 'products')
exports.Image = mongoose.model('Image', imageSchema, 'images')
exports.Category = mongoose.model('Category', categorySchema, 'categories')