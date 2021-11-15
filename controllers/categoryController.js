let controller = {};
let models = require("../models");
let Category = models.Category;
controller.getAll = async () => {
  const categories = await Category.findAll();
  return categories;
};
module.exports = controller;
