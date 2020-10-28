const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create user schema
const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  image: {
    type: String,
    required: false,
  },
});

module.exports = Product = mongoose.model("products", ProductSchema);
