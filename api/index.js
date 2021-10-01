const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();

dotenv.config();

mongoose
  .connect(process.env.DB_URL, {
    userNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected DB"))
  .catch((err) => console.log(err));

app.listen("5000", () => {
  console.log("server is running");
});

app.use("/", (req, res) => {
  console.log("hello, this is main url");
});
