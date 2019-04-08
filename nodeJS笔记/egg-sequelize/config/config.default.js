const path = require('path');

module.exports = appInfo => {
  const config = {};

  config.keys = appInfo.name + '1553826180610_6498';

  /* 它会在发现当用户 Session 的有效期仅剩下最大有效期一半的时候，重置 Session 的有效期 */
  config.session = {
    renew: true,
  };
  /** sequelize操作数据库配置  */
  config.sequelize = {
    username: 'root',
    password: '123456',
    database: 'egg_development',
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
  };

  /** 模板文件配置  */
  config.view = {
    root: [
      // 模板文件路径
      path.join(appInfo.baseDir, 'app/view'),
    ].join(','),
    defaultViewEngine: 'nunjucks', // 默认模板引擎
    defaultExtension: '.nj', // 渲染的时候可以省略后缀名
    mapping: {
      '.nj': 'nunjucks', // 根据后缀名匹配模板引擎
    },
  };

  /** 禁用 csrf  要不然 POST DELETE PUT 等请求会有问题 */
  config.security = {
    csrf: {
      enable: false,
    },
  };

  /** 变更解析时允许的最大长度 */
  config.bodyParser = {
    jsonLimit: '1mb', // 默认为100k
    formLimit: '1mb', // 默认为100k
  };

  /** 中启用 file 模式   */
  config.multipart = {
    // mode: 'file',
    mode: 'stream',
    fileExtensions: ['.apk'], // 增加对 apk 扩展名的文件支持
    // whitelist: ['.png'], // 覆盖整个白名单，只允许上传 '.png' 格式
  };

  /** 在应用中使用中间件
   * 配置 koa-compress errorHandler 中间件
   */
  config.middleware = ['compress', 'errorHandler'];
  config.compress = {
    threshold: 1,
    enable: true, // 通用配置项 是否开启
  };
  config.errorHandler = {
    match: '/api',
  };

  /** jsonp 设置  */
  exports.jsonp = {
    csrf: true, // 对 JSONP 接口开启 CSRF 校验。
    callback: 'callback', // 识别 query 中的 `callback` 参数
    limit: 100, // 函数名最长为 100 个字符
    whiteList: /^https?:\/\/test.com\//, // 设置请求白名单
    // whiteList: '.test.com', // 包括了test.com 的所有子域名，包括 test.com 自身
    // whiteList: 'sub.test.com', // sub.test.com 这一个域名。（同时支持 HTTP 和 HTTPS）
    // whiteList: [ 'sub.test.com', 'sub2.test.com' ],
  };

  /** 设置重定向安全的白名单  */
  exports.security = {
    domainWhiteList: ['.domain.com'], // 安全白名单，以 . 开头
  };

  return config;
};
