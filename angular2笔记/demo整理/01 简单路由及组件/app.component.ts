import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <p>{{content}}</p>
    <p>引入子组件</p>
    <page-one></page-one>
    <p>路由部分</p>
    <a routerLink="/pageone">pageone</a>
    <a routerLink="/pagetwo">pagetwo</a>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title='my-app我是根组件';
  content='my-app下面是我的主要内容';
  ngOnInit(){
    console.log('根组件启动了.....');
  }
}
