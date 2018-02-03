import { Component } from '@angular/core';
@Component({
  selector: 'page-two',
  template: `
    <h1>{{title}}</h1>
    <p>{{content}}</p>
  `
})
export class PageTwoComponent {
  title='page-two我是路由组件';
  content='page-two下面是我的主要内容';
  ngOnInit(){
    console.log('page-two路由组件启动了.....');
  }
}
