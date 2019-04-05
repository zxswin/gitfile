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

  /** 禁用 csrf  */
  config.security = {
    csrf: {
      enable: false,
    },
  };

  return config;
};
