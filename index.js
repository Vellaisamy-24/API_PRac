const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv").config();

mongoose
  .connect(process.env.mongoose_connect)
  .then(() => {
    console.log("Db connceted");
  })
  .catch((error) => {
    console.log(error);
  });
app.listen(3500, (req, res) => {
  console.log("server listeening to 33500");
});
