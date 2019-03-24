/** 引入了所有的数据库model模型  */
const Models = require("../models");

const test = async (ctx, next) => {
  let rs = await Models.Contents.findAndCountAll({
    limit: 3,
    offset: 0,
    include: {
      model: Models.Users
    }
  });

  ctx.body = {
    code: 0,
    count: rs.count,
    data: rs.rows,
    // data: rs.rows.map(d => {
    //   return {
    //     id: d.id,
    //     title: d.title,
    //     content: d.content,
    //     user_id: d.user_id,
    //     username: d.User.username,
    //     created_at: d.createdAt,
    //     like_count: d.like_count,
    //     comment_count: d.comment_count
    //   };
    // })
  };
};

module.exports = {
  "GET /api/test": test //暴露出对于的url及方法
};
