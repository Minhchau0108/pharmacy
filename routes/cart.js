var express = require("express");
var router = express.Router();

/* GET cart page. */
router.get("/", function (req, res, next) {
  let cart = req.session.cart;
  res.locals.cart = cart.getCart();
  res.render("cart", { title: "Cart" });
});

/* POST cart  */
router.post("/", function (req, res, next) {
  const productId = req.body.id;
  const quantity = isNaN(req.body.quantity) ? 1 : req.body.quantity;
  let productController = require("../controllers/productController");
  productController
    .getById(productId)
    .then((product) => {
      const cartItem = req.session.cart.add(product, productId, quantity);
      res.json(cartItem);
    })
    .catch((error) => next(error));
});

/* UPDATE cart  */
router.put("/", function (req, res, next) {
  const productId = req.body.id;
  const quantity = +req.body.quantity;
  const cart = req.session.cart.update(productId, quantity);
  res.json(cart);
});
/* DELETE cart  */
router.delete("/", function (req, res, next) {
  const productId = req.body.id;
  req.session.cart.remove(productId);
  res.json({
    totalQuantity: req.session.cart.totalQuantity,
    totalPrice: req.session.cart.totalPrice,
  });
});

module.exports = router;
