const mongoose = require('mongoose')

// Define the schema for a Home
const homeSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    bedrooms: {
        type: Number,
        required: true
    },
    bathrooms: {
        type: Number,
        required: true
    },
    sqft: {
        type: Number,
        required: true
    },
    images: [
        {
          public_id: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true,
          },
        },
      ],
    builtYear: {
        type: Number,
        required: false
    },
    description: {
        type: String,
        required: false
    }
}, { timestamps: true })

const Home = mongoose.model('Home', homeSchema)

module.exports = Home
