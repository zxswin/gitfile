/**  启用sequelize 操作数据库 */
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};

/**  nunjucks 进行模板渲染 */
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

/** 开启验证插件  */
exports.validate = {
  enable: true,
  package: 'egg-validate',
};

exports.session = {
  key: 'EGG_SESS', // key 代表了存储 Session 的 Cookie 键值对的 key 是什么
  maxAge: 24 * 3600 * 1000, // 1 天
  httpOnly: true, // 不允许客户端js获取
  encrypt: true, // 进行加密
};

// /** 加载自定义中间件 */
// module.exports = {
//   // 加载 errorHandler 中间件
//   middleware: [ 'errorHandler' ],
//   // 只对 /api 前缀的 url 路径生效
//   errorHandler: {
//     match: '/api',
//   },
// };
