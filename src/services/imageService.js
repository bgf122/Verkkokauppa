const Image = require('../models/Image')
const fs = require('fs')
const path = require('path')


exports.saveImage = async (req, res) => {
    try {
        const newImage = new Image({
            name: req.body.name,
            desc: req.body.desc,
            img: {
                data: fs.readFileSync(path.join(__dirname + '../uploads/' + req.file.filename)),
                contentType: 'image/png'
            }
        })
        newImage.save()
    } catch(err) {
        res.json({ error: err.message })
    }
}

exports.findImageById = async (req, res) => {
    try {
        const id = req.params.id
        const image = await Image.findById(id)
        // add image here
    } catch(err) {
        res.json({ error: err.message })
    }
}