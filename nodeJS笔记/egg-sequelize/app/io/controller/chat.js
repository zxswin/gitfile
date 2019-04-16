module.exports = app => {
  class Controller extends app.Controller {
    async index() {
      const message = this.ctx.args[0];
      console.log('chat :', message + ' : ' + process.pid);
      const say = 'chat 服务端发来的消息';
      this.ctx.socket.emit('res', say);
    }
  }
  return Controller;
};
