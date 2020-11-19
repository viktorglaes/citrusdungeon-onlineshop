const express = require("express");
const router = express.Router();
const Order = require("../../model/Order");

router.post("/submit", async (req, res) => {
  try {
    let {
      name,
      email,
      address1,
      address2,
      postalCode,
      country,
      state,
      secondEmail,
      creditCard,
      items,
      userId,
    } = req.body;
    // submit order
    let newOrder = new Order({
      name,
      email,
      address1,
      address2,
      postalCode,
      country,
      state,
      secondEmail,
      creditCard,
      items,
      userId,
    });

    newOrder.save().then((order) => {
      return res.status(201).json({
        success: true,
        msg: "Order is now submitted.",
      });
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  await Order.find({
    userId: req.query._id,
  }).then((data) => {
    res.send(data);
  });
});

module.exports = router;
