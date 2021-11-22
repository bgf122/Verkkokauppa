const { Product } = require('../models/models')

exports.saveProduct = async (req, res) => {
    try {
        const newProduct = await Product.insertMany({
            name: req.body.name,
            categories: [{
                _id: req.body.categories._id,
            }],
            price: req.body.price,
            productDescription: req.body.productDescription
        })
        res.json(newProduct)
    } catch(err) {
        res.json({ error: err.message })
    }
}

exports.findProducts = async (req, res) => {
    try {
        const products = await Product.find().populate('categories')
        res.json(products)
    } catch(err) {
        res.json({ error: err.message })
    }
}

exports.findProductById = async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findById(id).populate('categories')
        res.json(product)
    } catch(err) {
        res.json({ error: err.message })
    }
}