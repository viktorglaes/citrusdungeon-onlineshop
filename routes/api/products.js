const express = require("express");
const router = express.Router();
const Product = require("../../model/Product");
// const mongoose = require("mongoose");

router.get("/", async (req, res) => {
  // res.send(await Product.find({}));
  // const searchField = req.query.title;
  console.log(req.query);
  let reqParams = req.query;
  let typeArray = reqParams.type.split(",");
  await Product.find({
    title: { $regex: reqParams.title, $options: "$i" },
    type: { $in: typeArray },
  }).then((data) => {
    res.send(data);
  });
});

module.exports = router;

// title: { $regex: searchField, $options: "$i" }
