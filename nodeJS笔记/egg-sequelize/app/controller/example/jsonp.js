const Controller = require('egg').Controller;

class JsonpController extends Controller {
  async list() {
    const ctx = this.ctx;
    ctx.body = {
      name: 'egg',
      category: 'framework',
      language: 'Node.js',
    };
  }
}

module.exports = JsonpController;
