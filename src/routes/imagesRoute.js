const express = require('express')
const router = express.Router()
const service = require('../services/imageService')

router.get('/:id', service.findImageById)
router.post('/', service.saveImage)

module.exports = router