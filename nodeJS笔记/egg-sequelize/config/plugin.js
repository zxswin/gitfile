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

// /** 启用jsonp处理插件 不需要再这里配置  */
// exports.jsonp = {
//   enable: true,
//   package: 'egg-jsonp',
// };

/** 启用CORS处理跨域插件 */
exports.cors = {
  enable: true,
  package: 'egg-cors',
};

/** 开启日志切割插件  */
exports.logrotator = {
  enable: true,
  package: 'egg-logrotator',
};

/** 性能监控、安全提醒、故障排查、性能优化 */
// exports.alinode = {
//   enable: true,
//   package: 'egg-alinode',
// };
