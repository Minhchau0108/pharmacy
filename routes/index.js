var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("A new request received at " + Date.now());
  let productController = require("../controllers/productController");
  productController
    .getTop()
    .then((data) => {
      res.locals.products = data;
      let categoryController = require("../controllers/categoryController");
      return categoryController.getAll();
    })
    .then((data) => {
      res.locals.categories = data;
      res.render("index", { title: "Home" });
    })
    .catch((error) => next(error));
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;
