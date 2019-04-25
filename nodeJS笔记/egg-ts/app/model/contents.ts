import { Application } from 'egg';

module.exports = (app: Application) => {
  const { STRING, INTEGER } = app.Sequelize;

  const Contents = app.model.define(
    'contents',
    {
      title: {
        type: STRING(50),
        allowNull: false,
      },
      content: {
        type: STRING(1000),
        allowNull: false,
      },
      like_count: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      comment_count: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_bin',
    },
  );

  Contents.associate = function() {
    /** 一个内容对应一个用户  */
    app.model.Contents.belongsTo(app.model.Users, {
      foreignKey: 'user_id',
    });

    /** 一个内容对应多个评论  */
    app.model.Contents.hasMany(app.model.Comments, {
      foreignKey: 'content_id',
    });

    /** 一个内容对应多个点赞  */
    app.model.Contents.hasMany(app.model.Likes, {
      foreignKey: 'content_id',
    });
  };

  return Contents;
};
