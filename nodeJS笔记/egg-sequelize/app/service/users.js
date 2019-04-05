const md5 = require('md5');
const Service = require('egg').Service;

class User extends Service {
  /** 用户登录接口  */
  async login(body) {
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

  /** 退出登录  */

  async loginout() {
    const ctx = this.ctx;

    let username = ctx.cookies.get('username', {
      signed: true, // 进行验签
      encrypt: true, // 进行解密
    });

    let uid = ctx.session.uid;

    // 清空session
    if (uid) {
      ctx.session.uid = null;
    }

    // 清空cookies
    if (username) {
      ctx.cookies.set('username', null);
    }

    return {
      code: 0,
      data: null,
    };
  }

  /** 查询用户列表信息  */
  async list({ offset = 0, limit = 10 }) {
    return this.ctx.model.Users.findAndCountAll({
      offset,
      limit,
      order: [['created_at', 'desc'], ['id', 'desc']],
    });
  }

  /** 查询某个用户信息  */
  async find(id) {
    const user = await this.ctx.model.Users.findById(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    return user;
  }

  /** 新增用户信息  */
  async create(body) {
    let res = {};

    let username = body.username.trim();
    let password = body.password.trim();
    let repassword = body.repassword.trim();

    /** 用户名或密码不能为空  */
    if (username === '' || password === '' || repassword === '') {
      res = {
        code: 1,
        data: '用户名或密码不能为空',
      };
      return res;
    }

    /** 两次输入的密码不一致 */
    if (password !== repassword) {
      res = {
        code: 2,
        data: '两次输入的密码不一致',
      };
      return res;
    }

    /** 用户是否已经被注册过了  */
    let user = await this.ctx.model.Users.findOne({
      where: {
        username,
      },
    });

    if (user !== null) {
      res = {
        code: 3,
        data: '当前用户已经被注册了',
      };
      return res;
    }

    let newUser = await this.ctx.model.Users.build({
      username,
      password: md5(password),
    }).save();

    res = {
      code: 0,
      data: {
        id: newUser.get('id'),
        username: newUser.get('username'),
      },
    };
    return res;
  }

  /** 更新用户信息  */
  async update({ id, updates }) {
    const user = await this.ctx.model.Users.findById(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    return user.update(updates);
  }

  /** 删除用户数据  */
  async del(id) {
    const user = await this.ctx.model.Users.findById(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    return user.destroy();
  }
}

module.exports = User;
