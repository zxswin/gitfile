
import { Component} from '@angular/core';

@Component({
	selector: 'mycompare',
	template: `
		<p>这个组件没有用到redux进行状态储存和管理,当切换组件的时候,无法保存更改</p>
		<button (click)="increment()">加1</button>
		<button (click)="decrement()">减1</button>
		<button (click)="reset()">复位mycompare组件</button>
		<h2>{{comCount}}</h2>
	`
})
export class MycompareComponent {
	comCount:number=0;

	constructor(){}
    ngOnInit(){
      
    }
	increment(){
		this.comCount++;
	}
	decrement(){
		this.comCount--;
	}
	reset(){
		this.comCount=0;
	}
}