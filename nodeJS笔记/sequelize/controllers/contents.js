/** 引入了所有的数据库model模型  */
const Models = require("../models/");

const getContents = async (ctx, next) => {
  /* include 用一对多的关联加载数据！一个内容有多个评论 返回的字段中comments 属性是复数形式*/
  await Models.Contents.findAll({ 
    include: [{ 
      model: Models.Comments, 
      attributes: ['content'], // 只会返回content字段内容
      include: [
        {
          model: Models.Users,
          attributes: ['username'], // 只会返回username字段内容
        }
      ] }],
  
  }).then(data => {
    ctx.body = data;
  });
};

module.exports = {
  "GET /api/contents": getContents //暴露出对于的url及方法
};