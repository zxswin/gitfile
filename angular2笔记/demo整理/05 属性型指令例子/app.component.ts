import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl:'./app.component.html'
})

export class AppComponent {
  title:string='我是根组件我启动了';
  color:string;
  constructor(
  ) {}


  ngOnInit(){
    console.log('根组件启动了.....');
  }
}
