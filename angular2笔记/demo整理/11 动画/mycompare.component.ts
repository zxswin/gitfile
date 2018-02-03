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

@Component({
  selector: 'hero-message',
  template: `
     <button style="color:#00f;" [@loginState]="loginBtnState"(mouseenter)="toggleLoginState(true)" (mouseleave)="toggleLoginState(false)">button</button>
     Weight: <input type="number" id="todo" > kg
  <br/>
  Height: <input type="number" id="height"> cm
  <br/>
  Your BMI is <div id="bmi"></div>
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
  loginBtnState:any;
  constructor(){}
  ngOnInit(){
   
  }
 
 toggleLoginState(state: boolean){
    this.loginBtnState = state ? 'active' : 'inactive';
  }
}




