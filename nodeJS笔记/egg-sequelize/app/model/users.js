module.exports = app => {
  const { STRING, CHAR } = app.Sequelize;
  const Users = app.model.define(
    'users',
    {
      username: {
        type: STRING(20),
        allowNull: false,
      },
      password: {
        type: CHAR(32),
        allowNull: false,
      },
      provider: {
        type: STRING(20),
        allowNull: false,
      },
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_bin',
    },
  );

  Users.associate = function() {
    /** 一个用户对应多个内容  */
    app.model.Users.hasMany(app.model.Contents, {
      foreignKey: 'user_id',
    });

    /** 一个用户对应多个评论  */
    app.model.Users.hasMany(app.model.Comments, {
      foreignKey: 'user_id',
    });

    /** 一个用户有多个点赞信息  */
    app.model.Users.hasMany(app.model.Likes, {
      foreignKey: 'user_id',
    });
  };

  return Users;
};
