const mongoose = require('mongoose')

const Image = mongoose.model(
    'Image',
    new mongoose.Schema({
        name: {
            type: String
        },
        imageDescription: {
            type: String
        },
        img: {
            type: String
        }
    })
)

module.exports = Image