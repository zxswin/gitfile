const Service = require('egg').Service;
const md5 = require('md5');

class Login extends Service {
  /** 用户登录接口  */
  async index(body) {
    const ctx = this.ctx;
    let username = body.username;
    let password = body.password;

    // 是否存在该用户
    const user = await ctx.model.Users.findOne({
      where: {
        username,
      },
    });

    // 用户不存在
    if (user === null) {
      return {
        code: 1,
        data: '不存在该用户',
      };
    }

    // 用户密码错误
    if (user.get('password') !== md5(password)) {
      return {
        code: 1,
        data: '密码错误',
      };
    }

    // 验证通过 登录成功

    // 设置cookies
    ctx.cookies.set('username', user.get('username'), {
      httpOnly: true, // 默认就是 true
      signed: true, // 加签传输
      encrypt: true, // 加密传输
    });

    // 设置session
    ctx.session.uid = user.get('id');

    return {
      code: 0,
      data: {
        id: user.get('id'),
        username: user.get('username'),
      },
    };
  }
}

module.exports = Login;
