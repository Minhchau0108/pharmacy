var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require("express-session");
var hbs = require("hbs");
hbs.registerHelper("dateFormat", require("handlebars-dateformat"));

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var productsRouter = require("./routes/products");
var cartRouter = require("./routes/cart");
var loginRouter = require("./routes/login");
var registerRouter = require("./routes/register");
var checkoutRouter = require("./routes/checkout");
var profileRouter = require("./routes/profile");
var adminRouter = require("./routes/admin");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

// app.use(logger("combined"));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Use session
app.use(
  session({
    cookie: { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 },
    secret: "S3cret",
    resave: false,
    saveUninitialized: false,
  })
);
// Use cart controller
let Cart = require("./controllers/cartController");
app.use((req, res, next) => {
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  req.session.cart = cart;
  res.locals.totalQuantity = cart.totalQuantity;
  next();
});
app.use((req, res, next) => {
  res.locals.isLogin = req.session.isLogin ? req.session.isLogin : false;
  next();
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/cart", cartRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/checkout", checkoutRouter);
app.use("/profile", profileRouter);
app.use("/admin", adminRouter);

app.get("/sync", (req, res) => {
  let models = require("./models");
  models.sequelize.sync().then(() => {
    res.send("database sync completed!!!");
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
