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
  config.jsonp = {
    // csrf: true, // 对 JSONP 接口开启 CSRF 校验。
    callback: 'callback', // 识别 query 中的 `callback` 参数
    limit: 100, // 函数名最长为 100 个字符
    // whiteList: /^https?:\/\/test.com\//, // 设置请求白名单
    // whiteList: '.test.com', // 包括了test.com 的所有子域名，包括 test.com 自身
    // whiteList: 'sub.test.com', // sub.test.com 这一个域名。（同时支持 HTTP 和 HTTPS）
    // whiteList: [ 'sub.test.com', 'sub2.test.com' ],
  };

  /** 禁用 csrf  要不然 POST DELETE PUT 等请求会有问题 */
  /** 设置重定向安全的白名单  */
  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: ['http://127.0.0.1'], // 安全白名单，以 . 开头
  };
  /** CORS跨域配置  */
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  config.httpclient = {
    // 是否开启本地 DNS 缓存，默认关闭，开启后有两个特性
    // 1. 所有的 DNS 查询都会默认优先使用缓存的，即使 DNS 查询错误也不影响应用
    // 2. 对同一个域名，在 dnsCacheLookupInterval 的间隔内（默认 10s）只会查询一次
    enableDNSCache: false,
    // 对同一个域名进行 DNS 查询的最小间隔时间
    dnsCacheLookupInterval: 10000,
    // DNS 同时缓存的最大域名数量，默认 1000
    dnsCacheMaxLength: 1000,

    request: {
      // 默认 request 超时时间
      timeout: 3000,
    },

    httpAgent: {
      // 默认开启 http KeepAlive 功能
      keepAlive: true,
      // 空闲的 KeepAlive socket 最长可以存活 4 秒
      freeSocketTimeout: 4000,
      // 当 socket 超过 30 秒都没有任何活动，就会被当作超时处理掉
      timeout: 30000,
      // 允许创建的最大 socket 数
      maxSockets: Number.MAX_SAFE_INTEGER,
      // 最大空闲 socket 数
      maxFreeSockets: 256,
    },

    httpsAgent: {
      // 默认开启 https KeepAlive 功能
      keepAlive: true,
      // 空闲的 KeepAlive socket 最长可以存活 4 秒
      freeSocketTimeout: 4000,
      // 当 socket 超过 30 秒都没有任何活动，就会被当作超时处理掉
      timeout: 30000,
      // 允许创建的最大 socket 数
      maxSockets: Number.MAX_SAFE_INTEGER,
      // 最大空闲 socket 数
      maxFreeSockets: 256,
    },
  };

  /** 自定义日志存放目录  */
  // config.logger = {
  //   dir: '/path/to/your/custom/log/dir',
  // };

  /** 自定义日志名称  */
  // config.logger = {
  //   appLogName: `${appInfo.name}-web.log`,
  //   coreLogName: 'egg-web.log',
  //   agentLogName: 'egg-agent.log',
  //   errorLogName: 'common-error.log',
  //   encoding: 'gbk', // 设置日志编码 默认为utf-8
  //   outputJSON: true, // 设置输出格式为JSON,方便日志监控系统分析
  //   level: 'DEBUG', // 打印所有级别日志到文件中
  //   level: 'NONE', // 关闭所有打印到文件的日志：
  // };

  /** 按小时进行日志切割  */
  // config.logrotator = {
  //   filesRotateByHour: [path.join(appInfo.root, 'logs', appInfo.name, 'common-error.log')],
  // };

  /** 启动项配置  */
  config.cluster = {
    listen: {
      port: 8080,
      hostname: '127.0.0.1',
      // path: '/var/run/egg.sock',
    },
  };

  /**  Node.js 性能平台 接入 */
  // config.alinode = {
  //   // 从 `Node.js 性能平台` 获取对应的接入参数
  //   appid: '<YOUR_APPID>',
  //   secret: '<YOUR_SECRET>',
  // };
  return config;
};
