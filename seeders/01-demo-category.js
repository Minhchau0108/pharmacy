"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = [
      {
        name: "Thuốc kháng sinh",
        imagepath: "/img/cat-img-1.jpg",
      },
      {
        name: "Thuốc tim mạch",
        imagepath: "/img/cat-img-2.jpg",
      },
      {
        name: "Thuốc tiêu hóa",
        imagepath: "/img/cat-img-3.jpg",
      },
      {
        name: "Thuốc không kê đơn",
        imagepath: "/img/cat-img-4.jpg",
      },
    ];
    data.map((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
      return item;
    });
    await queryInterface.bulkInsert("Categories", data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
