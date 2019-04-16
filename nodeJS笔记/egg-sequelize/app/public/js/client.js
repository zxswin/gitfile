// or http://127.0.0.1:8080/chat
const socket = require('socket.io-client')('http://127.0.0.1:8080/chat');

socket.on('connect', () => {
  console.log('connect!');
  socket.emit('chat', 'hello world!');
  setTimeout(() => {
    socket.emit('chat', '一秒后再发送一次!');
  }, 1000);
});

socket.on('res', msg => {
  console.log('res from server: %s!', msg);
});
