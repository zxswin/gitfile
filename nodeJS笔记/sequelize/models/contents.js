"use strict";
module.exports = (sequelize, Sequelize) => {
  const Contents = sequelize.define(
    "Contents",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      content: {
        type: Sequelize.STRING(1000),
        allowNull: false
      },
      like_count: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      comment_count: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      }
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_bin"
    }
  );
  Contents.associate = function(models) {
    // associations can be defined here

    /** 一个内容对应一个用户  */
    Contents.belongsTo(models.Users, {
      foreignKey: "user_id"
    });

    /** 一个内容对应多个评论  */
    Contents.hasMany(models.Comments, {
      foreignKey: "content_id"
    });

    /** 一个内容对应多个点赞  */
    Contents.hasMany(models.Likes, {
      foreignKey: "content_id"
    });
  };
  return Contents;
};
