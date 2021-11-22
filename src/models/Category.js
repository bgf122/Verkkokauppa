const mongoose = require('mongoose')

const Category = mongoose.model(
    'Category',
    new mongoose.Schema({
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
)

module.exports = Category
