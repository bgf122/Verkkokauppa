const express = require('express')
const router = express.Router()
const service = require('../services/productService')

router.get('/', service.findProducts)
router.get('/:id', service.findProductById)
router.post('/', service.saveProduct)

module.exports = router