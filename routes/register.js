var express = require("express");
var router = express.Router();
let userController = require("../controllers/userController");

router.get("/", function (req, res, next) {
  res.render("register", { title: "Register" });
});

router.post("/", function (req, res, next) {
  const { username, email, password, confirmedPassword } = req.body;
  userController
    .register(username, email, password, confirmedPassword)
    .then(({ errors = [], user = null }) => {
      if (errors.length > 0) {
        res.render("register", {
          errors,
        });
      }
      if (user) {
        res.render("register", {
          user,
        });
      }
    })
    .catch((error) => next(error));
});

module.exports = router;
