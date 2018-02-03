import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <button (click)="destroyCom()">点击销毁组件</button>
    <birthday [birthday]="birthday" *ngIf="flag"></birthday>
  `,
})
export class AppComponent {
  birthday=new Date(2012, 10, 10);
  flag=true;
  destroyCom(){
    this.flag=false;
  }

}
