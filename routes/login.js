var express = require("express");
var router = express.Router();
let userController = require("../controllers/userController");

router.get("/", function (req, res, next) {
  res.render("login", { title: "Login" });
});
router.post("/", function (req, res, next) {
  const { username, password } = req.body;
  userController
    .login(username, password)
    .then(({ errors = [], user = null }) => {
      if (errors.length > 0) {
        res.render("login", {
          errors,
        });
      }
      if (user) {
        req.session.username = user.username;
        req.session.isAdmin = user.isAdmin;
        req.session.userId = user.id;
        req.session.isLogin = true;
        if (user.isAdmin) {
          res.redirect("/admin");
        } else {
          res.redirect("/");
        }
      }
    })
    .catch((error) => next(error));
});

module.exports = router;
