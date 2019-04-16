const Controller = require('egg').Controller;
const md5 = require('md5');

class PassportController extends Controller {
  async render() {
    const ctx = this.ctx;

    console.log('ctx.isAuthenticated()============================', ctx.isAuthenticated());

    if (ctx.isAuthenticated()) {
      // 当前用户已经授权登录了
      console.log('当前用户已经授权登录了11111111111111111111');
      // ctx.body = `<div>
      //   <h2>${ctx.path}</h2>
      //   <hr>
      //   Logined user: <img src="${ctx.user.photo}"> ${ctx.user.displayName} / ${
      //   ctx.user.id
      // } | <a href="/api/loginout">Logout</a>
      //   <pre><code>${JSON.stringify(ctx.user, null, 2)}</code></pre>
      //   <hr>
      //   <a href="/">Home</a> | <a href="/user">User</a>
      // </div>`;

      console.log('ctx.user', JSON.stringify(ctx.user, null, 2));
      let username = ctx.user.name;
      let password = ctx.user.id;
      let provider = ctx.user.provider;

      /** 用户是否已经被注册过了  */
      let user = await this.ctx.model.Users.findOne({
        where: {
          username,
        },
      });

      if (!user) {
        user = await ctx.model.Users.build({
          username,
          password: md5(password),
          provider: provider,
        }).save();
      }

      // 设置cookies
      ctx.cookies.set('username', user.get('username'), {
        httpOnly: true, // 默认就是 true
        signed: true, // 加签传输
        encrypt: true, // 加密传输
      });

      // 设置session
      ctx.session.uid = user.get('id');

      ctx.rotateCsrfSecret(); // 更新csrfToken

      console.log('准备跳转');
      // ctx.session.returnTo = '/';
      ctx.redirect('/');
    } else {
      // ctx.session.returnTo = '/login';
      // 当前用户没有授权登录 可以删除 因为如果没有授权登录是不会跑到这里的
      console.log('当前用户没有授权登录111111111111111111111');
      ctx.session.returnTo = ctx.path;
      ctx.body = `
        <div>
          <h2>${ctx.path}</h2>
          <hr>
          Login with
          <a href="/passport/weibo">Weibo</a> | <a href="/passport/github">Github</a> |
          <a href="/passport/bitbucket">Bitbucket</a> | <a href="/passport/twitter">Twitter</a>
          <hr>
          <a href="/">Home</a> | <a href="/user">User</a>
        </div>
      `;
    }
  }
}

module.exports = PassportController;
