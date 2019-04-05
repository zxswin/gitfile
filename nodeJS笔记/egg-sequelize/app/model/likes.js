module.exports = app => {
  const Likes = app.model.define(
    'likes',
    {},
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_bin',
      timestamps: true,
    },
  );

  Likes.associate = function() {
    /** 一个点赞对应一个用户  */
    app.model.Likes.belongsTo(app.model.Users, {
      foreignKey: 'user_id',
    });

    /** 一个点赞对应一个内容  */
    app.model.Likes.belongsTo(app.model.Contents, {
      foreignKey: 'content_id',
    });
  };

  return Likes;
};
