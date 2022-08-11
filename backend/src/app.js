const express = require("express");
const cors = require("cors");
const { errors } = require("celebrate");

const bodyParser = require("body-parser");
const app = express();

const Product = require("./routes/ProductRoute");

app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));
app.use(cors());
app.use(express.json());

app.use(Product);

app.use(errors());

module.exports = app;
