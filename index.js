import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
const app=express();

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
