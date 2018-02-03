import { Component } from '@angular/core';
@Component({
  selector: 'page-one-one',
  template: `
    <h1>{{title}}</h1>
    <p>{{content}}</p>
  `
})
export class OnePartOneComponent {
  title='page-one-one我是子路由组件';
  content='page-one-one下面是我的主要内容';
  ngOnInit(){
    console.log('page-one-one子路由组件启动了.....');
  }
}
