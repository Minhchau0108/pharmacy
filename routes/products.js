var express = require("express");
var router = express.Router();

/* GET product page. */
router.get("/", function (req, res, next) {
  let productController = require("../controllers/productController");
  productController
    .getAll(req.query)
    .then((data) => {
      let categoryController = require("../controllers/categoryController");
      res.locals.products = data;
      return categoryController.getAll();
    })
    .then((data) => {
      res.locals.categories = data;
      res.render("shop", { title: "Products" });
    })
    .catch((error) => next(error));
});
/* GET detail product page. */
router.get("/:id", function (req, res, next) {
  let productController = require("../controllers/productController");
  productController
    .getById(req.params.id)
    .then((data) => {
      res.locals.product = data;
      return productController.getByCategory(data.categoryId);
    })
    .then((data) => {
      res.locals.products = data;
      res.render("detail", { title: "Product" });
    })
    .catch((error) => next(error));
});

module.exports = router;
