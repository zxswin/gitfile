import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }
  public async view() {
    const { ctx } = this;
    await ctx.render('view', { text: '要渲染的数据' });
  }
}
