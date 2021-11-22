const { Category } = require('../models/models')

exports.saveCategory = async (req, res) => {
    try {
        const newCategory = await Category.insertMany({
            name: req.body.name            
        })
        res.json(newCategory)
    } catch(err) {
        res.json({ error: err.message })
    }
}

exports.findCategoryById = async (req, res) => {
    try {
        const id = req.params.id
        const category = await Category.findById(id)
        res.json(category)
    } catch(err) {
        res.json({ error: err.message })
    }
}