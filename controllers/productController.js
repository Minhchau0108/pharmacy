let controller = {};
let models = require("../models");
let Product = models.Product;
controller.getAll = async (query) => {
  let options = {
    include: [{ model: models.Category }],
  };
  if (query.category) {
    options = {
      where: { categoryId: query.category },
    };
  }
  const products = await Product.findAll(options);
  return products;
};
controller.getTop = async () => {
  const products = await Product.findAll({ limit: 8 });
  return products;
};
controller.getById = async (id) => {
  const product = await Product.findOne({
    where: { id: id },
    include: [{ model: models.Category }],
  });
  return product;
};
controller.getByCategory = async (categoryId) => {
  const products = await Product.findAll({
    where: { categoryId: categoryId },
    include: [{ model: models.Category }],
  });
  return products;
};
controller.add = async (
  name,
  ingredient,
  imagepath,
  description,
  price,
  category
) => {
  // console.log({ name, ingredient, imagepath, description, price, category });
  const product = await Product.create({
    name: name,
    ingredient: ingredient,
    imagepath: imagepath,
    description: description,
    price: price,
    categoryId: category,
  });
  return product;
};
controller.delete = async (productId) => {
  return await Product.destroy({
    where: {
      id: productId,
    },
  });
};
controller.update = async (
  productId,
  name,
  ingredient,
  imagepath,
  description,
  price,
  category
) => {
  const product = await Product.update(
    {
      name: name,
      ingredient: ingredient,
      imagepath: imagepath,
      description: description,
      price: price,
      categoryId: category,
    },
    {
      where: { id: productId },
    }
  );
  return product;
};
module.exports = controller;
