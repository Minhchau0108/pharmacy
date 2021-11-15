let controller = {};
let models = require("../models");
let User = models.User;

controller.findByUsername = async (username) => {
  const user = await User.findOne({
    where: { username: username },
  });
  return user;
};
controller.createUser = async (username, email, password) => {
  const user = await User.create({
    username: username,
    email: email,
    password: password,
    isAdmin: false,
  });
  return user;
};
controller.register = async (username, email, password, confirmedPassword) => {
  let errors = [];
  validate(username, email, password, confirmedPassword);

  if (errors.length > 0) {
    return { errors };
  }
  const existingUser = await controller.findByUsername(username);
  if (existingUser) {
    errors.push({ msg: "Username is already exist" });
    return { errors };
  }
  const user = await controller.createUser(username, email, password);
  return { errors, user };
};
controller.login = async (username, password) => {
  let errors = [];
  const user = await controller.findByUsername(username);
  if (!user) {
    errors.push({ msg: "Username is not exist" });
    return { errors };
  }
  if (user.password !== password) {
    errors.push({ msg: "Password is not match" });
    return { errors };
  }
  return { errors, user };
};
const validate = (username, email, password, confirmedPassword) => {
  let errors = [];
  if (!username || !email || !password || !confirmedPassword) {
    errors.push({ msg: "Please fill in all fields" });
  }
  if (password !== confirmedPassword) {
    errors.push({
      msg: "Password and confirmed password don't match",
    });
  }
  if (password?.length < 3) {
    errors.push({
      msg: "Password must have at least 3 characters",
    });
  }
};
controller.getUsers = async () => {
  const users = await User.findAll({ where: { isAdmin: false } });
  return users;
};

module.exports = controller;
