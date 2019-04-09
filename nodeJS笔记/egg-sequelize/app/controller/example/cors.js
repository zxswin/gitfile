const Controller = require('egg').Controller;

class CorsController extends Controller {
  async list() {
    const ctx = this.ctx;
    /** 实现CORS跨域响应头  */
    // ctx.set({
    //   'Access-Control-Allow-Origin': 'http://127.0.0.1',
    //   'Access-Control-Allow-Methods': 'POST',
    //   'Access-Control-Max-Age': '86400',
    // });
    ctx.body = {
      name: 'eggcors',
      category: 'framework',
      language: 'cors',
    };
  }
}

module.exports = CorsController;
