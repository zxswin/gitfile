import { Component } from '@angular/core';
@Component({
  selector: 'page-no',
  template: `
    <h1>{{title}}</h1>
    <p>{{content}}</p>
  `
})
export class PageNoComponent {
  title='page-no我是路由组件';
  content='page-no找不到路径我就会显示';
  ngOnInit(){
    console.log('page-no路由组件启动了.....');
  }
}
