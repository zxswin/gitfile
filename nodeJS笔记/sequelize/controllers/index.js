const fs = require('fs');

const index = async (ctx, next) => {
  let res;
  
  if (ctx.session.uid) {
    res = fs.readFileSync(__dirname + "/../template/contents.html", "utf8");
  } else {
    res = fs.readFileSync(__dirname + "/../template/login.html", "utf8");
  }

  console.log("res", res);
  ctx.body = res;
};

module.exports = {
  'GET /': index //暴露出对于的url及方法
};