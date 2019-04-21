let index = 0;

module.exports = {
  'GET /ws': async (ctx, next) => {
    let names = '甲乙丙丁戊己庚辛壬癸';
    let name = names[index % 10];
    ctx.render('ws.html', { name: `路人${name}` });
  },

  // 登录后设置缓存用于用户标示 非常重要
  'POST /wsin': async (ctx, next) => {
    index++;
    let name = ctx.request.body.name || '路人甲';
    let user = {
      type: '游客',
      id: index,
      name: name,
      image: index % 10
    };
    let value = Buffer.from(JSON.stringify(user)).toString('base64');
    console.log(`Set cookie value: ${value}`);
    ctx.cookies.set('name', value);
    ctx.body = {
      code: 0,
      data: '登录成功'
    };
  },

  // 用户退出清空缓存
  'GET /wsout': async (ctx, next) => {
    ctx.cookies.set('name', '');
    ctx.body = {
      code: 0,
      data: '退出成功'
    };
  }
};
