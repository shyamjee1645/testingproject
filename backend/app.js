const express = require('express')
const app = express()
const peopleRouter = require('./routes/peopleRoute')

app.get('/', (request, response) => {
    response.send('<h1>Phonebook</h1>')
})

app.use('/api/people', peopleRouter)

module.exports = app
