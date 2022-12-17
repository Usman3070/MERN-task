const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const counterSchema = new Schema({
  value: {
    type: Number,
  },
});

module.exports = mongoose.model("counter", counterSchema);
