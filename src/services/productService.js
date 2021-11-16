const Product = require('../models/productModel')

exports.saveProduct = async (req, res) => {
    try {
        const newProduct = await Product.insertMany({
            name: req.body.name,
            category: [{
                _id: req.body.category._id,
                name: req.body.category.name
            }],
            price: req.body.price,
            description: req.body.description
        })
        res.json(newProduct)
    } catch(err) {
        res.json({ error: err.message })
    }
}

exports.findProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch(err) {
        res.json({ error: err.message })
    }
}

exports.findProductById = async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findById(id)
        res.json(product)
    } catch(err) {
        res.json({ error: err.message })
    }
}