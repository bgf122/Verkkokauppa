const Category = require('../models/Category')

exports.saveCategory = async (req, res) => {
    try {
        const newCategory = new Category({
            name: req.body.name
        })
        await Category.insertMany(newCategory)
        res.json(newCategory)
    } catch(err) {
        res.json({ error: err.message })
    }
}

exports.findCategories = async (req, res) => {
    try {
        const categories = await Category.find().populate('products')
        res.json(categories)
    } catch(err) {
        res.json({ error: err.message })
    }
}

exports.findCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id).populate('products')
        res.json(category)
    } catch(err) {
        res.json({ error: err.message })
    }
}