const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

const peopleRouter = require("./routes/peopleRoute");
const homeRouter = require("./routes/homeRoute");
const productRouter = require("./routes/productRouter.js");

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

app.use("/", homeRouter);
app.use("/api/products",productRouter);
app.use("/api/people", peopleRouter);

module.exports = app;
