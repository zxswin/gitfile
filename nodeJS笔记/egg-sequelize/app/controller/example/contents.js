const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');

class ContentController extends Controller {
  /* 获取内容信息接口  */
  async content() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.example.contents.getContents();
  }

  /** 对内容进行评论的接口  */
  async comment() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.example.contents.comment(this.ctx.request.body);
  }

  /** 对内容进行点赞的接口  */
  async like() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.example.contents.like(this.ctx.request.body);
  }

  /** 返回一个静态资源文件  */
  async resimg() {
    const ctx = this.ctx;
    /** 返回图片资源  */
    // ctx.response.type = 'image/png';
    // ctx.body = fs.readFileSync(path.join(__dirname, '../public/img/nz-zorro.png'));

    /** 返回js文件  */
    ctx.response.type = 'application/javascript; charset=utf-8';
    ctx.body = fs.readFileSync(path.join(__dirname, './home.js'));

    /** 外部重定向  */
    // ctx.redirect('https://www.baidu.com/');
  }
}

module.exports = ContentController;
