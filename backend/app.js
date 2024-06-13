const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

const errorMiddleware = require("./middleware/error");

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

const userRouter = require("./routes/userRouter.js");
const productRouter = require("./routes/productRouter.js");

app.use("/api/v1",productRouter);
app.use("/api/v1", userRouter);

app.use(errorMiddleware);

module.exports = app;
