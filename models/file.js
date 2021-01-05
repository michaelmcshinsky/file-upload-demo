"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class File extends Model {
    static associate(models) {
      this.belongsTo(models.Post);
    }
  }
  File.init(
    {
      originalname: DataTypes.STRING,
      key: DataTypes.STRING,
      bucket: DataTypes.STRING,
      location: DataTypes.STRING,
      post_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Post",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "File",
      underscored: true,
      timestamps: false,
    }
  );
  return File;
};
