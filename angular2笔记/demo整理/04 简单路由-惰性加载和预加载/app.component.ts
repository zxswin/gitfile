import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <p>{{content}}</p>
    <p>按钮点击导航</p>
    <a href="javascript:void(null)" (click)="selectone()">跳转到pageonepart1</a>
    <a href="javascript:void(null)" (click)="selecttwo()">跳转到pageonepart2</a>
    <a href="javascript:void(null)" (click)="closePopup()">清除第二路由出口pagetwo</a>
    <a href="javascript:void(null)" (click)="showPopup()">重新载入第二路由出口pagetwo</a>
    
    <p>路由导航部分</p>
    <a routerLink="/pageone">pageone</a>
    <a [routerLink]="[{ outlets: { popup: ['pagetwo'] } }]">pagetwo</a>
    <router-outlet></router-outlet>
    <router-outlet name="popup"></router-outlet>
  `
})

export class AppComponent {
  title='my-app我是根组件';
  content='my-app下面是我的主要内容';

  constructor(
    private router: Router
  ) {}




  ngOnInit(){
    console.log('根组件启动了.....');
  }
  selectone(){
    this.router.navigate(['/pageone/pageonepart1']);
  }
  selecttwo(){
    this.router.navigate(['/pageone/pageonepart2']);
  }
  closePopup() {
    this.router.navigate([{ outlets: { popup: null }}]);
  }
  showPopup() {
    this.router.navigate([{ outlets: { popup: 'pagetwo' }}]);
  }
}
