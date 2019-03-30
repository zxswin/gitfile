"use strict";
module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define(
    "Users",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      password: {
        type: Sequelize.CHAR(32),
        allowNull: false
      }
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_bin"
    }
  );
  Users.associate = function(models) {
    // associations can be defined here
    // hasMany : 一对多的关系，一个user对应多个content

    /** 一个用户对应多个内容  */
    Users.hasMany(models.Contents, {
      foreignKey: "user_id"
    });

    /** 一个用户对应多个评论  */
    Users.hasMany(models.Comments, {
      foreignKey: "user_id"
    });
  };
  return Users;
};
