import { Component } from '@angular/core';
@Component({
  selector: 'page-one',
  template: `
    <h1>{{title}}</h1>
    <p>{{content}}</p>
    <a routerLink="/pageonepart1">pageonepart1</a>
    <a routerLink="/pageonepart2">pageonepart2</a>
  `
})
export class PageOneComponent {
  title='page-one我是路由组件';
  content='page-one下面是我的主要内容';
  ngOnInit(){
    console.log('page-one路由组件启动了.....');
  }
}
