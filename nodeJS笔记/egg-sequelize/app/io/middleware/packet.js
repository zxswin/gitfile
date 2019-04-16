module.exports = () => {
  return async (ctx, next) => {
    console.log(ctx.packet);
    const say = 'packet 服务端发来的消息';
    ctx.socket.emit('res', 'packet!' + say);
    await next();
    console.log('packet response!');
  };
};
