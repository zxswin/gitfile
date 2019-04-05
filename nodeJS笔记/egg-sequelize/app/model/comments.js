module.exports = app => {
  const { STRING } = app.Sequelize;

  const Comments = app.model.define(
    'comments',
    {
      comment: {
        type: STRING(1000),
        allowNull: false,
      },
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_bin',
    },
  );

  Comments.associate = function() {
    /** 一个评论对应一个用户  */
    app.model.Comments.belongsTo(app.model.Users, {
      foreignKey: 'user_id',
    });

    /** 一个评论对应一个内容  */
    app.model.Comments.belongsTo(app.model.Contents, {
      foreignKey: 'content_id',
    });
  };

  return Comments;
};
