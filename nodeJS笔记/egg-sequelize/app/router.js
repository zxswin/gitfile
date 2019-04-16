// app/router.js
module.exports = app => {
  const { router, controller } = app;

  /** 内部重定向 */
  // router.redirect('/', '/login', 302);

  /** 渲染主页  */
  router.get('/', controller.example.home.index);
  /** 渲染用户登录页面  */
  router.get('/login', controller.example.home.login);
  /** 渲染用户注册页面  */
  router.get('/register', controller.example.home.register);

  /** 获取内容及评论信息接口 */
  router.get('/api/contents', controller.example.contents.content);

  /** 对内容进行评论 */
  router.post('/api/comments', controller.example.contents.comment);

  /** 对内容进行点赞操作  */
  router.post('/api/likes', controller.example.contents.like);

  /** 用户登录  */
  router.post('/api/login', controller.example.users.login);

  /** 退出登录  */
  router.get('/api/loginout', controller.example.users.loginout);

  /** 用户模块路由  CRUD 路由结构  */
  router.resources('users', '/api/users', controller.example.users);

  /** 读取一张图片  */
  // const compress = app.middleware.compress({ threshold: 1 });
  // router.get('/api/resimg', compress, controller.example.contents.resimg);

  // const gzip = app.middleware.gzip({ threshold: 1 });
  // router.get('/api/resimg', gzip, controller.example.contents.resimg);

  router.get('/api/resimg', controller.example.contents.resimg);

  /** 渲染用户登录页面  */
  router.get('/upload', controller.example.home.upload);
  /** 处理文件上传  */
  router.post('/api/upload', controller.example.upload.upload);

  /** jsonp接口实现跨域请求  */
  const jsonp = app.jsonp(); // 实现jsonp的中间件
  app.router.get('/api/jsonp', jsonp, controller.example.jsonp.list);

  /** CORS实现跨域请求接口  */
  app.router.post('/api/cors', controller.example.cors.list);

  /** 测试用例  */
  router.get('/api/test', controller.example.home.test);

  /** 挂载鉴权路由  */

  app.router.get('/passport', controller.example.passport.render);

  app.passport.mount('weibo');
  app.passport.mount('github');
  app.passport.mount('bitbucket');
  app.passport.mount('twitter');

  // 上面的 mount 是语法糖，等价于
  // const github = app.passport.authenticate('github', {});
  // router.get('/passport/github', github);
  // router.get('/passport/github/callback', github);

  /** 强制创建所有表格
   * 运行种子文件 npx sequelize db:seed:all
   */
  router.post('/api/sync', controller.example.home.sync);

  /** websocket p2p聊天室  */
  // app.io.of('/')
  // app.io.route('chat', app.io.controller.chat.index);

  // app.io.of('/')
  // app.io.route('chat', app.io.controller.chat.index);

  // app.io.of('/chat')
  /** websocket 通讯测试  */
  app.io.of('/chat').route('chat', app.io.controller.chat.index);

  /** websocket P2P聊天  */
  app.io.of('/ptop').route('exchange', app.io.controller.nsp.exchange);

  /** websocket前端页面渲染  */
  router.get('/websocket', controller.example.home.websocket);
};
