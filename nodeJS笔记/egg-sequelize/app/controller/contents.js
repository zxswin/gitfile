
const Controller = require('egg').Controller;

class ContentController extends Controller {
  /* 获取内容信息接口  */
  async content() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.contents.getContents();
  }

  /** 对内容进行评论的接口  */
  async comment() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.contents.comment(this.ctx.request.body);
  }

  /** 对内容进行点赞的接口  */
  async like() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.contents.like(this.ctx.request.body);
  }
}

module.exports = ContentController;
