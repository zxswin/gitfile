const Models = require('../models/');

const sync = async (ctx, next) => {

  // 强制同步所有模型 强制创建表
  Models.sequelize.sync({force: true});

  ctx.body = {
    code: 0,
    data: [],
    errorInfo: "创建数据表成功"
  };
};

module.exports = {
  "GET /api/sync": sync //暴露出对于的url及方法
};
