const express = require('express')
const router = express.Router()
const service = require('../services/categoryService')

router.get('/:id', service.findCategoryById)
router.get('/', service.findCategories)
router.post('/', service.saveCategory)

module.exports = router