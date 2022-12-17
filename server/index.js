const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/CounterRoute");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(cors());
app.use("/counter", router);

mongoose
  .connect(process.env.MONGOURI)
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .then(() => {
    console.log("server is listening at port 5000");
  })
  .catch((err) => console.log(err));
