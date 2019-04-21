const url = require('url');

const ws = require('ws');

const Cookies = require('cookies');

const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const templating = require('./templating');

const WebSocketServer = ws.Server;

const app = new Koa();

// 打印URL 和请求方法
app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

// 从cookies中解析出 name 字段用于做用户标示
app.use(async (ctx, next) => {
  ctx.state.user = parseUser(ctx.cookies.get('name') || '');
  await next();
});

// 解析静态资源
let staticFiles = require('./static-files');
app.use(staticFiles('/static/', __dirname + '/static'));

// 解析出body参数
app.use(bodyParser());

// 添加 nunjucks 作为模板引擎
app.use(
  templating('views', {
    noCache: true,
    watch: true
  })
);

// 添加控制器中间件
app.use(controller());

let server = app.listen(3000);

// 读取缓存中的相关字段用于用户标示
function parseUser(obj) {
  if (!obj) {
    return;
  }
  let s = '';
  if (typeof obj === 'string') {
    s = obj;
  } else if (obj.headers) {
    let cookies = new Cookies(obj, null);
    console.log('namenamenamenamename', cookies.get('name'));
    s = cookies.get('name');
  }
  if (s) {
    try {
      let user = JSON.parse(Buffer.from(s, 'base64').toString());
      return user;
    } catch (e) {}
  }
}

// 创建websocke服务器
function createWebSocketServer(
  server,
  onConnection,
  onMessage,
  onClose,
  onError
) {
  let wss = new WebSocketServer({
    // websocket和koa监听的是同一个端口
    // 如果请求的http普通请求交给koa处理
    // 如果请求是ws请求则交给websocket处理
    server: server
  });

  // 向有用户广播信息
  wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each(client) {
      // 这里可以通过 过滤用户id 向指定的用户发送消息
      client.send(data);
    });
  };

  // 连接事件触发
  onConnection =
    onConnection ||
    function() {
      console.log('[WebSocket] connected.');
    };

  // 发送消息事件触发
  onMessage =
    onMessage ||
    function(msg) {
      console.log('[WebSocket] message received: ' + msg);
    };

  // 关闭消息事件触发
  onClose =
    onClose ||
    function(code, message) {
      console.log(`[WebSocket] closed: ${code} - ${message}`);
    };

  // 发送错误事件触发
  onError =
    onError ||
    function(err) {
      console.log('[WebSocket] error: ' + err);
    };

  // 响应连接事件
  wss.on('connection', function(ws) {
    let location = url.parse(ws.upgradeReq.url, true);
    console.log('[WebSocketServer] connection: ' + location.href);
    ws.on('message', onMessage); // this对象时ws
    ws.on('close', onClose); // this对象时ws
    ws.on('error', onError); // this对象时ws

    let user = parseUser(ws.upgradeReq);
    if (!user) {
      ws.close(4001, 'Invalid user');
    }
    ws.user = user;
    ws.wss = wss;
    onConnection.apply(ws); // 通过继承的方式使用对象冒充 onConnection函数中的this 为ws
  });
  return wss;
}

var messageIndex = 0;

// 创建要发送的消息类型
function createMessage(type, user, data) {
  messageIndex++;
  return JSON.stringify({
    id: messageIndex,
    type: type,
    user: user,
    data: data
  });
}

function onConnection() {
  // 通过继承的方式使用对象冒充 onConnection函数中的this 为ws
  let user = this.user;
  let msg = createMessage('join', user, `${user.name} joined.`);
  // 向每一个用户去广播了这一条消息
  this.wss.broadcast(msg);
  let users = this.wss.clients.map(function(client) {
    return client.user;
  });

  // 发送用户列表
  this.send(createMessage('list', user, users));
}

function onMessage(message) {
  // 用户发送消息
  if (message && message.trim()) {
    let msg = createMessage('chat', this.user, message.trim());
    // 向每一个用户去广播了这一条消息
    this.wss.broadcast(msg);
  }
}

function onClose() {
  // 用户离开
  let user = this.user;
  let msg = createMessage('left', user, `${user.name} is left.`);
  // 向每一个用户去广播了这一条消息
  this.wss.broadcast(msg);
}

// 创建websocket 服务
app.wss = createWebSocketServer(server, onConnection, onMessage, onClose);

console.log('app started at port 3000...');
