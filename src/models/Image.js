const mongoose = require('mongoose')

const Image = mongoose.model(
    'Image',
    new mongoose.Schema({
        name: {
            type: String
        },
        description: {
            type: String
        },
        img: {
            data: Buffer,
            type: String
        }
    })
)

module.exports = Image