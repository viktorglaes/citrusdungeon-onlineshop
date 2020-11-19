const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create user schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  addressLine1: {
    type: String,
    required: false,
  },
  addressLine2: {
    type: String,
    required: false,
  },
  state: {
    type: String,
    required: false,
  },
  postalCode: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
});

module.exports = User = mongoose.model("users", UserSchema);
