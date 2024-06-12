const express = require('express');
const app = express();
const peopleRouter = require('./routes/peopleRoute');
const homeRouter = require('./routes/homeRoute');

app.use('/', homeRouter);
app.use('/api/people', peopleRouter);

module.exports = app
