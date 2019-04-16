module.exports = () => {
  return async (ctx, next) => {
    const say = 'auth 服务端发来的消息';
    ctx.socket.emit('res', 'auth!' + say);
    await next();
    console.log('disconnect!');
  };
};
