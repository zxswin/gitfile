// const Subscription = require('egg').Subscription;

// class UpdateCache extends Subscription {
//   // 通过 schedule 属性来设置定时任务的执行间隔等配置
//   static get schedule() {
//     return {
//       interval: '1m', // 1 分钟间隔
//       type: 'all', // 指定所有的 worker 都需要执行
//     };
//   }

//   // subscribe 是真正定时任务执行时被运行的函数
//   async subscribe() {
//     const res = await this.ctx.curl('http://127.0.0.1:8080/api/contents', {
//       dataType: 'json',
//     });
//     this.ctx.app.cache = res.data;
//   }
// }

// module.exports = UpdateCache;

/** 简写形式  */
module.exports = {
  schedule: {
    // interval: '1m', // 1 分钟间隔
    cron: '0 0 */1 * * *', // 每三小时准点执行一次
    type: 'all', // 指定所有的 worker 都需要执行
  },
  async task(ctx) {
    const res = await ctx.curl('http://127.0.0.1:8080/api/contents', {
      dataType: 'json',
    });
    ctx.app.cache = res.data;
  },
};
