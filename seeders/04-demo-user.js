"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = [
      {
        username: "test",
        password: "1234",
        email: "test@email.com",
        isAdmin: false,
      },
      {
        username: "oreo",
        password: "1234",
        email: "oreo@email.com",
        isAdmin: false,
      },
      {
        username: "admin",
        password: "admin",
        email: "admin@email.com",
        isAdmin: true,
      },
    ];
    data.map((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
      return item;
    });
    await queryInterface.bulkInsert("Users", data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
