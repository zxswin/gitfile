/** 引入了所有的数据库model模型  */
const Models = require('../models/');
const md5 = require('md5');
const fs = require('fs');

const register = async (ctx, next) => {

  // console.log(ctx.request.body);
  let username = ctx.request.body.username.trim();
  let password = ctx.request.body.password.trim();
  let repassword = ctx.request.body.repassword.trim();

  if (username=='' || password == '' || repassword == '') {
      return ctx.body = {
          code: 1,
          data: '用户名或密码不能为空'
      }
  }
  if (password != repassword) {
      return ctx.body = {
          code: 2,
          data: '两次输入的密码不一致'
      }
  }

  let user = await Models.Users.findOne({
      where: {
          username
      }
  });

  if (user !== null) {
      return ctx.body = {
          code: 3,
          data: '当前用户已经被注册了'
      }
  }

  let newUser = await Models.Users.build({
      username,
      password: md5(password)
  }).save();

  ctx.body = {
      code: 0,
      data: {
          id: newUser.get('id'),
          username: newUser.get('username')
      }
  }
  
};

const toregister = async (ctx, next) => {
  let res
  res = fs.readFileSync(__dirname + "/../template/register.html", "utf8");
  ctx.body = res;
}

module.exports = {
  "POST /api/register": register, //暴露出对于的url及方法
  "GET /api/toregister": toregister //暴露出对于的url及方法
};
