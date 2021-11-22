const Image = require('../models/Image')

exports.saveImage = async (req, res) => {
    try {
        const newImage = await Image.insertMany({
            // image stuff here  
        })
        // res.json(newImage)
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