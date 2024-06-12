const express = require('express');
const app = express();
const peopleRouter = require('./routes/peopleRoute');
const homeRouter = require('./routes/homeRoute');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const testapiRouter = require('./routes/testApi');


if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "backend/config/config.env" });
  }
  
  app.use(express.json());
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(fileUpload());
  
app.use('/', homeRouter);
app.use('/api/people', peopleRouter);
app.use('/testapi', testapiRouter);

module.exports = app
