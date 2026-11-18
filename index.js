const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.listen(3500, (req, res) => {
  console.log("server listeening to 33500");
});
