const Controller = require('egg').Controller;

class HomeController extends Controller {
  /** 渲染主页  */
  async index() {
    const ctx = this.ctx;

    // 强制同步所有模型 强制创建表
    // await ctx.model.sync({force: true});

    /* 渲染一个模板, 路径与'app/view'相关` */
    // 获取cookies
    let username = ctx.cookies.get('username', {
      signed: true, // 进行验签
      encrypt: true, // 进行解密
    });

    let uid = ctx.session.uid;

    /** 如果Cookies的值被篡改了 那么服务器端获取的值是 undefined  */
    console.log('uid', uid);
    if (!username || !uid) {
      // 渲染登录页面
      return ctx.render('login');
    }

    /** 用户已经登录过了  */
    if (uid) {
      const data = { username: username };
      // 渲染内容页面
      return ctx.render('contents', data);
    }
  }

  /** 渲染登录页面  */
  async login() {
    const ctx = this.ctx;
    await ctx.render('login');
  }

  /** 渲染注册页面  */
  async register() {
    const ctx = this.ctx;

    await ctx.render('register');
  }

  /** 渲染文件上传页面  */
  async upload() {
    const ctx = this.ctx;

    await ctx.render('upload', { csrf: ctx.csrf });
  }
}

module.exports = HomeController;
