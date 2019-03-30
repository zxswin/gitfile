/** 引入了所有的数据库model模型  */
const Models = require('../models/');

const like = async (ctx, next) => {
  // 让客户端请求的时候带过来一个凭证
  let contentId = ctx.request.body.content_id;    //要点赞的内容id
  // let uid = ctx.request.body.uid; //当前点赞的用户

  // 根据上面的cookie确定，如果当前请求是一个登录的用户，那么头信息肯定会有当前这个登录用户id
  let uid = ctx.session.uid;

  console.log('uid============' ,uid);

  // console.log(contentId, uid);

  if (!uid) {
      return ctx.body = {
          code: 1,
          data: '你还没有登录'
      }
  }

  // 获取当前被点赞的内容
  let content = await Models.Contents.findById(contentId);
  // console.log(content);
  if (!content) {
      return ctx.body = {
          code: 2,
          data: '没有对应的内容'
      }
  }

  // 查询当前用户是否对该内容已经点过赞了
  // SELECT * FROM likes WHERE content_id=1 and user_id=1
  let like = await Models.Likes.findOne({
      where: {
          [Models.Sequelize.Op.and]: [
              {'content_id': contentId},
              {'user_id': uid}
          ]
      }
  });

  if (like) {
      return ctx.body = {
          code: 3,
          data: '你已经点过赞了'
      }
  }

  // 对内容的like数据进行增加
  content.set( 'like_count', content.get('like_count') + 1 );
  await content.save();
  // console.log(content);

  await Models.Likes.build({
      content_id: contentId,
      user_id: uid
  }).save();

  ctx.body = {
      code: 0,
      data: content
  }
};

module.exports = {
  "POST /api/like": like //暴露出对于的url及方法
};
