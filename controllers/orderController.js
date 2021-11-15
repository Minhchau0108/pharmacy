let controller = {};
let models = require("../models");
let Order = models.Order;
let Detail = models.Orders_Product;
controller.createOrder = async (
  phone,
  firstName,
  lastName,
  address,
  userId,
  cart
) => {
  console.log({ phone, firstName, lastName, address, userId, cart });
  const order = await Order.create({
    userId: userId,
    phone: phone,
    firstName: firstName,
    lastName: lastName,
    address: address,
    totalPrice: cart.totalPrice,
    statusId: 1,
  });
  if (order) {
    const orderId = order.id;
    for (let el of cart.items) {
      await Detail.create({
        orderId: orderId,
        productId: el.item.id,
        price: el.item.price,
        quantity: el.quantity,
      });
    }
  }
};
controller.getByUserId = async (userId) => {
  const orders = await Order.findAll({
    where: { userId: userId },
    include: [{ model: models.User }, { model: models.StatusOrder }],
  });
  return orders;
};
controller.getAll = async () => {
  const orders = await Order.findAll({
    include: [{ model: models.User }, { model: models.StatusOrder }],
  });
  return orders;
};
controller.updateStatusConfirm = async (orderId) => {
  await Order.update(
    {
      statusId: 2,
    },
    {
      where: { id: orderId },
    }
  );
  const result = await Order.findOne({
    where: { id: orderId },
    include: [{ model: models.User }, { model: models.StatusOrder }],
  });
  return result;
};

module.exports = controller;
