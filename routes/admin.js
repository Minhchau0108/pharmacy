var express = require("express");
var router = express.Router();
let productController = require("../controllers/productController");
let categoryController = require("../controllers/categoryController");
let orderController = require("../controllers/orderController");
let userController = require("../controllers/userController");

/* GET dashboard. */
router.get("/", function (req, res, next) {
  if (!req.session.isAdmin) {
    res.send("You can not access admin page");
    return;
  }
  productController
    .getAll(req.query)
    .then((data) => {
      res.locals.products = data;
      return categoryController.getAll();
    })
    .then((data) => {
      res.locals.categories = data;
      res.render("admin", { title: "Admin" });
    })
    .catch((error) => next(error));
});

/* GET orders. */
router.get("/orders", function (req, res, next) {
  if (!req.session.isAdmin) {
    res.send("You can not access admin page");
    return;
  }
  orderController
    .getAll()
    .then((data) => {
      res.locals.orders = data;
      res.render("orders", { title: "Orders" });
    })
    .catch((error) => next(error));
});

/* GET users. */
router.get("/users", function (req, res, next) {
  userController
    .getUsers()
    .then((data) => {
      res.locals.users = data;
      res.render("users", { title: "Users" });
    })
    .catch((error) => next(error));
});

/* GET add product. */
router.get("/add-product", function (req, res, next) {
  if (!req.session.isAdmin) {
    res.send("You can not access admin page");
    return;
  }
  categoryController
    .getAll()
    .then((data) => {
      res.locals.categories = data;
      res.render("add-product", { title: "Admin" });
    })
    .catch((error) => next(error));
});

/* POST add product. */
router.post("/add-product", function (req, res, next) {
  if (!req.session.isAdmin) {
    res.send("You can not access admin page");
    return;
  }
  const { name, ingredient, imagepath, description, price, category } =
    req.body;
  productController
    .add(name, ingredient, imagepath, description, price, category)
    .then((data) => {
      res.redirect("/admin");
    })
    .catch((error) => next(error));
});
/* DELETE  product. */
router.delete("/delete-product", function (req, res, next) {
  if (!req.session.isAdmin) {
    res.send("You can not access admin page");
    return;
  }
  const productId = req.body.id;
  productController
    .delete(productId)
    .then((product) => {
      res.json(product);
    })
    .catch((error) => next(error));
});
/* GET edit product. */
router.get("/edit-product/:id", function (req, res, next) {
  if (!req.session.isAdmin) {
    res.send("You can not access admin page");
    return;
  }
  const productId = req.params.id;
  productController
    .getById(productId)
    .then((data) => {
      res.locals.product = data;
      return categoryController.getAll();
    })
    .then((data) => {
      res.locals.categories = data;
      res.render("edit-product", { title: "Admin" });
    })
    .catch((error) => next(error));
});
/* EDIT product. */
router.post("/edit-product/:id", function (req, res, next) {
  const productId = req.params.id;
  const { name, ingredient, imagepath, description, price, category } =
    req.body;
  productController
    .update(
      productId,
      name,
      ingredient,
      imagepath,
      description,
      price,
      category
    )
    .then((data) => {
      res.redirect("/admin");
    })
    .catch((error) => next(error));
});
/* UPDATE ORDER. */
router.put("/update-confirm-order", function (req, res, next) {
  if (!req.session.isAdmin) {
    res.send("You can not access admin page");
    return;
  }
  const orderId = req.body.id;
  orderController
    .updateStatusConfirm(orderId)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => next(error));
});
module.exports = router;
