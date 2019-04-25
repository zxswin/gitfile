import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

const path = require('path');

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  /** 用于cookie签名密钥，应更改为您自己的并保持安全  */
  config.keys = appInfo.name + '_1555408138723_5676';

  /** 中间件配置  */
  config.middleware = ['compress'];

  /** 所有接口均会运用这个中间件  */
  config.compress = {
    threshold: 1,
    enable: true, // 通用配置项 是否开启
  };

  /* 它会在发现当用户 Session 的有效期仅剩下最大有效期一半的时候，重置 Session 的有效期 */
  config.session = {
    renew: true,
  };

  /** sequelize 的相关配置  */
  config.sequelize = {
    username: 'root',
    password: '123456',
    database: 'egg_development',
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    timezone: '+08:00',
  };

  /** view 模板插件添加( egg-view-nunjucks ) 配置  */
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

  /** 中启用 file 模式 用于文件上传等  */
  config.multipart = {
    mode: 'stream',
    fileExtensions: ['.apk'], // 增加对 apk 扩展名的文件支持
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

  /** 设置重定向安全的白名单  */
  config.security = {
    csrf: {
      enable: true, // 开启CSRF防护
      ignore: ctx => ctx.ip === '127.0.0.1', // 不对这个ip地址的cors跨域请求进行csrf校验
    },
    // domainWhiteList: ['.domain.com'] // 安全白名单，以 . 开头
    // domainWhiteList: ['http://127.0.0.1'],
    // domainWhiteList: ['http://localhost'],
  };

  /** CORS跨域配置  */
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  /** 开启Passport登录鉴权  */
  config.passportWeibo = {
    key: 'a',
    secret: 'b',
  };

  config.passportGithub = {
    key: 'b7a9c170da074ce5e43f',
    secret: '65699d679cc5ec8d7bfb980e711b93219a860fd8',
  };

  config.passportBitbucket = {
    key: 'e',
    secret: 'f',
  };

  config.passportTwitter = {
    key: 'g',
    secret: 'h',
  };

  /** 在这里添加您的特殊配置  */
  const bizConfig = {};

  /** 返回配置  */
  return {
    ...config,
    ...bizConfig,
  };
};
