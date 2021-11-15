"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, { foreignKey: "userId" });
      Order.belongsTo(models.StatusOrder, { foreignKey: "statusId" });
    }
  }
  Order.init(
    {
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      totalPrice: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
