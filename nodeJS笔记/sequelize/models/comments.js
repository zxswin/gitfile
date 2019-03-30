"use strict";
module.exports = (sequelize, Sequelize) => {
  const Comments = sequelize.define(
    "Comments",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.STRING(1000),
        allowNull: false
      }
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_bin"
    }
  );
  Comments.associate = function(models) {
    // associations can be defined here

    /** 一个评论对应一个用户  */
    Comments.belongsTo(models.Users, {
      foreignKey: "user_id"
    });

    /** 一个评论对应一个内容  */
    Comments.belongsTo(models.Contents, {
      foreignKey: "content_id"
    });
  };
  return Comments;
};
