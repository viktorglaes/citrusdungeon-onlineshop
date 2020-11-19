const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create order schema
const OrderSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address1: {
    type: String,
    required: true,
  },
  address2: {
    type: String,
    required: false,
  },
  postalCode: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  secondEmail: {
    type: String,
    required: false,
  },
  creditCard: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: String,
    required: false,
  },
});

module.exports = Order = mongoose.model("orders", OrderSchema);
