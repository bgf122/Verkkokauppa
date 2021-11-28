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
        image: {
            data: Buffer,
            contentType: String
        }
    })
)

module.exports = Image