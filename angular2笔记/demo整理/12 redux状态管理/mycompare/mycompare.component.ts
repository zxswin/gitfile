import {
  Component,
  Inject,
  trigger,
  state,
  style,
  transition,
  animate,
  OnDestroy
} from '@angular/core';
import{ ECharts }from 'echarts'
import {Observable} from 'rxjs/Rx';
import { Subscription} from 'rxjs/Subscription';

// import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/range';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/Distinct';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/do';


import 'rxjs/add/observable/throw'; 
import 'rxjs/add/observable/combineLatest'; 

import 'rxjs/add/observable/from'; 
import 'rxjs/add/observable/of'; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/startWith'; 
import 'rxjs/add/operator/bufferCount';
import 'rxjs/add/operator/bufferTime';
@Component({
  selector: 'hero-message',
  template: `
     <button style="color:#00f;" [@loginState]="loginBtnState"(mouseenter)="toggleLoginState(true)" (mouseleave)="toggleLoginState(false)">button</button>
     Weight: <input type="number" id="todo" > kg
  <br/>
  Height: <input type="number" id="height"> cm
  <br/>
  Your BMI is <div id="bmi"></div>
  <p>{{typest | trimSpace}}<p>
    `,
     animations: [
    trigger('loginState', [
      state('inactive', style({
         transform: 'scale(1)'
      })),
      state('active',   style({
         transform: 'scale(2)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class MycompareComponent {
  typest="4  45  4 5 88 888";
  loginBtnState:any;
  constructor(){}
  ngOnInit(){
    this.todo();

  }
  todo(){
  let todo = document.getElementById('todo');
let input$ = Observable.fromEvent(todo, 'keyup');
input$
  .debounceTime(400).distinctUntilChanged().pluck('target','value')
  .subscribe(v => console.log(v));

}
 toggleLoginState(state: boolean){
    this.loginBtnState = state ? 'active' : 'inactive';
  }



 

 



}




