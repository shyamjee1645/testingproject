const mongoose = require('mongoose')
require('dotenv').config()

const uri = process.env.DB_URI

console.log(uri);

const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('MongoDB connected successfully')
    } catch (error) {
        console.error('MongoDB connection error:', error)
        process.exit(1)
    }
}

module.exports = connectDB
