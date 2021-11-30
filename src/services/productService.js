const Product = require('../models/Product')
const Category = require('../models/Category')

exports.saveProduct = async (req, res) => {
    try {
        const newProductObj = new Product({
            name: req.body.name,
            categories: req.body.categories,
            price: req.body.price,
            productDescription: req.body.productDescription,
            images: req.body.images
        })
        await Product.insertMany(newProductObj)
        for (let i = 0; i <  req.body.categories.length; i++) {
            await Category.updateOne({
                '_id': req.body.categories[i]._id },
                { $push: { products : newProductObj._id }
            })
        }
        res.json(newProductObj)
    } catch(err) {
        res.json({ error: err.message })
    }
}

exports.findProducts = async (req, res) => {
    try {
        const products = await Product.find().populate('categories').populate('images')
        res.json(products)
    } catch(err) {
        res.json({ error: err.message })
    }
}

exports.findProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate('categories').populate('images')
        res.json(product)
    } catch(err) {
        res.json({ error: err.message })
    }
}