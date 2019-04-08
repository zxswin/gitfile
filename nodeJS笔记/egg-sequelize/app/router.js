// app/router.js
module.exports = app => {
  const { router, controller } = app;

  /** 内部重定向 */
  // router.redirect('/', '/login', 302);

  /** 渲染主页  */
  router.get('/', controller.home.index);
  /** 渲染用户登录页面  */
  router.get('/login', controller.home.login);
  /** 渲染用户注册页面  */
  router.get('/register', controller.home.register);

  /** 获取内容及评论信息接口 */
  router.get('/api/contents', controller.contents.content);

  /** 对内容进行评论 */
  router.post('/api/comments', controller.contents.comment);

  /** 对内容进行点赞操作  */
  router.post('/api/likes', controller.contents.like);

  /** 用户登录  */
  router.post('/api/login', controller.users.login);

  /** 退出登录  */
  router.get('/api/loginout', controller.users.loginout);

  /** 用户模块路由  CRUD 路由结构  */
  router.resources('users', '/api/users', controller.users);

  /** 读取一张图片  */
  // const compress = app.middleware.compress({ threshold: 1 });
  // router.get('/api/resimg', compress, controller.contents.resimg);

  // const gzip = app.middleware.gzip({ threshold: 1 });
  // router.get('/api/resimg', gzip, controller.contents.resimg);

  router.get('/api/resimg', controller.contents.resimg);

  /** 渲染用户登录页面  */
  router.get('/upload', controller.home.upload);
  /** 处理文件上传  */
  router.post('/api/upload', controller.upload.upload);
};
