const fs = require('fs');

const test = async (ctx, next) => {
  let res = fs.readFileSync(__dirname + "/../template/index.html", "utf8");
  console.log("res", res);
  ctx.body = res;
};

module.exports = {
  'GET /test': test //暴露出对于的url及方法
};