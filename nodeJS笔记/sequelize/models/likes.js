"use strict";
module.exports = (sequelize, Sequelize) => {
  const Likes = sequelize.define(
    "Likes",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      }
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_bin",
      timestamps: true
    }
  );
  Likes.associate = function(models) {
    // associations can be defined here

    /** 一个点赞对应一个内容  */
    Likes.belongsTo(models.Contents, {
      foreignKey: "content_id"
    });

    /** 一个点赞对应一个用户  */
    Likes.belongsTo(models.Users, {
      foreignKey: "user_id"
    });
  };
  return Likes;
};
