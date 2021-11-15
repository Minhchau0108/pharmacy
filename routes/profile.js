var express = require("express");
var router = express.Router();
let orderController = require("../controllers/orderController");

/* GET home page. */
router.get("/", function (req, res, next) {
  if (req.session.isLogin) {
    orderController
      .getByUserId(req.session.userId)
      .then((orders) => {
        res.locals.orders = orders;
        res.render("profile", { title: "Profile" });
      })
      .catch((error) => next(error));
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
