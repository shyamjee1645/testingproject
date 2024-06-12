require('dotenv').config()
const app = require('./app')
const connectDB = require("./config/database")

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
}).catch((error) => {
    console.error('Failed to connect to MongoDB:', error)
})