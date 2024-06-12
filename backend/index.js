require("dotenv").config({ path: "./config/config.env" });
const app = require('./app')
const connectDatabase = require('./config/database')

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

connectDatabase();