import { Component } from '@angular/core';
@Component({
  selector: 'page-one-two',
  template: `
    <h1>{{title}}</h1>
    <p>{{content}}</p>
  `
})
export class OnePartTwoComponent {
  title='page-one-two我是子路由组件';
  content='page-one-two下面是我的主要内容';
  ngOnInit(){
    console.log('page-one-two子路由组件启动了.....');
  }
}
