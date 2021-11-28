const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const productRoute = require('./routes/productRoute')
const categoryRoute = require('./routes/categoryRoute')
const imageRoute = require('./routes/imagesRoute')

require('dotenv').config()

const URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@verkkokauppa.clljs.mongodb.net/verkkokauppa?retryWrites=true&w=majority`
const PORT = process.env.PORT || 5000

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

app.use(express.json())
app.use(cors())
app.use('/api/images', imageRoute);
app.use('/api/products', productRoute);
app.use('/api/categories', categoryRoute);
app.listen(PORT, () => `App running on port ${PORT}`)