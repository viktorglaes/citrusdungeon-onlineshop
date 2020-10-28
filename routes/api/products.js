const express = require("express");
const router = express.Router();
const Product = require("../../model/Product");
// const mongoose = require("mongoose");

router.get("/", async (req, res) => {
  res.send(await Product.find({}));
});

module.exports = router;
