var express = require("express");
var router = express.Router();
let orderController = require("../controllers/orderController");

router.get("/", function (req, res, next) {
  if (req.session.isLogin) {
    let cart = req.session.cart;
    res.locals.cart = cart.getCart();
    res.render("checkout", { title: "Checkout" });
  } else {
    res.redirect("/login");
  }
});
router.post("/", function (req, res, next) {
  const { phone, firstName, lastName, address } = req.body;
  const userId = req.session.userId;
  const cart = req.session.cart.getCart();
  orderController
    .createOrder(phone, firstName, lastName, address, userId, cart)
    .then(() => {
      req.session.cart = {};
      res.locals.totalQuantity = 0;
      res.render("thankyou", { title: "Thankyou" });
    })
    .catch((error) => next(error));
});

module.exports = router;
