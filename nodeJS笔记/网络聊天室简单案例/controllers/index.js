// index:
index = 0;
module.exports = {
  'GET /': async (ctx, next) => {
    let names = '甲乙丙丁戊己庚辛壬癸';
    let name = names[index % 10];
    ctx.render('ws.html', { name: `路人${name}` });
  }
};
