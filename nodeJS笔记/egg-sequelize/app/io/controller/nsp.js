const Controller = require('egg').Controller;

class NspController extends Controller {
  async exchange() {
    console.log('执行了1 nsp.js');
    const { ctx, app } = this;
    const nsp = app.io.of('/ptop');
    const message = ctx.args[0] || {};
    const socket = ctx.socket;
    const client = socket.id;

    console.log('客户端发送的消息', message);

    try {
      console.log('执行了2 nsp.js');
      const { target, payload } = message;
      if (!target) return;
      const msg = ctx.helper.parseMsg('exchange', payload, { client, target });
      console.log('服务器端发送了消息', target, msg);
      nsp.emit(target, msg);
    } catch (error) {
      console.log('执行了3 nsp.js');
      app.logger.error(error);
    }
  }
}

module.exports = NspController;
