const express = require('express')
const router = express.Router()
const service = require('../services/imageService')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
    
const upload = multer({ storage: storage });

router.get('/:id', service.findImageById)
router.post('/', upload.single('image'), function (req, res) {
   service.saveImage(req, res)
});

module.exports = router