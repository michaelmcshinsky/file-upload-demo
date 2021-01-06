"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Posts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      originalname: Sequelize.STRING,
      key: Sequelize.STRING,
      bucket: Sequelize.STRING,
      location: Sequelize.STRING,
      post_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Post",
          key: "id",
        },
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Posts");
  },
};
