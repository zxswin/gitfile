(async function() {

  const path = require('path');
  const Koa = require('koa');
  const KoaBodyParser = require('koa-bodyparser');
  const controller = require('./controller');

  const fs = require('mz/fs');
  const mime = require('mime'); // 引入依赖

  const Session = require('koa-session');

  const app = new Koa();

  // app.keys = new KeyGrip(['im a newer secret', 'i like turtle'], 'sha256');

  app.keys = ['miaov'];

  app.use( Session({
      key: 'koa:sess',
      maxAge: 86400000,
      autoCommit: true,
      overwrite: true,
      httpOnly: true,
      signed: true,
      rolling: false,
      renew: false
  }, app) );

  /** 处理静态资源  */
  app.use(async (ctx ,next) => {
    let url = '/public/';
    let dir = __dirname + '/public';
    let rpath = ctx.request.path;
    if (rpath.startsWith(url)) {
      let fp = path.join(dir, rpath.substring(url.length));
      if (await fs.stat(fp)) {
        ctx.response.type = mime.getType(rpath);  // 指定响应类型 Content-Type
        ctx.response.body = await fs.readFile(fp); // 指定响应体
      } else {
        ctx.response.status = 404;
      }
    }
    /** 这个比较加上next() 要不然后续程序不响应  */
    await next();
  });


  app.use( KoaBodyParser() );

  app.use(controller());

  app.listen(80);

})();