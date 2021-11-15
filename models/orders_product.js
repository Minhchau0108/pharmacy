"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders_Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Orders_Product.belongsTo(models.Order, { foreignKey: "orderId" });
      Orders_Product.belongsTo(models.Product, { foreignKey: "productId" });
    }
  }
  Orders_Product.init(
    {
      price: DataTypes.DECIMAL,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Orders_Product",
    }
  );
  return Orders_Product;
};
