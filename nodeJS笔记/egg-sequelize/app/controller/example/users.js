const Controller = require('egg').Controller;

class UserController extends Controller {
  /** 用户登录  */
  async login() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.example.users.login(ctx.request.body);
  }

  /** 用户登出  */

  async loginout() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.example.users.loginout();
  }

  /** GET	/users
   * 示例 http://127.0.0.1:7001/users/
   * 一般用于获取查询列表记录数据
   */
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit),
      offset: ctx.helper.parseInt(ctx.query.offset),
    };
    ctx.body = await ctx.service.example.users.list(query);
  }

  /** GET	/users/:id
   * 示例 http://127.0.0.1:7001/users/2
   * 查询某个用户信息
   */

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.example.users.find(ctx.helper.parseInt(ctx.params.id));
  }

  /** POST	/users
   *  示例 http://127.0.0.1:7001/users/
   * 一般用于新增用户
   */

  async create() {
    const ctx = this.ctx;
    const user = await ctx.service.example.users.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = user;
  }

  /** PUT	/posts/:id
   * 示例 http://127.0.0.1:7001/users/2
   * 一般用于更新某个用户信息
   */

  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const body = ctx.request.body;
    ctx.body = await ctx.service.example.users.update({
      id,
      updates: body,
    });
  }

  /** DELETE	/posts/:id
   * 示例 http://127.0.0.1:7001/users/2
   * 一般用于删除某个用户信息
   */

  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    await ctx.service.example.users.del(id);
    ctx.status = 200;
  }
}

module.exports = UserController;
