"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      this.hasMany(models.File);
    }
  }
  Post.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Post",
      underscored: true,
    }
  );
  return Post;
};
