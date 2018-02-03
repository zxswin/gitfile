
import { Component} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/interval';
import { ActionReducer, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './counter';


@Component({
	selector: 'mycount',
	template: `
	    <p>这个组件使用了redux进行状态储存和管理,切换组件的时候数据可以保存</p>
		<button (click)="increment()">加1</button>
		<button (click)="decrement()">减1</button>
		<button (click)="reset()">复位mycount组件</button>
		<h2>{{ counter | async }}</h2>
	`
})
export class MycountComponent {
	counter:any;
	constructor(
		private store:Store<any>
	){}

	ngOnInit(){
	   this.counter=this.store.select('counter');
	   console.log(this.counter._isScalar)
    }

	increment(){
		this.store.dispatch({ type: INCREMENT });
		console.log(this.counter._isScalar)
	}

	decrement(){
		this.store.dispatch({ type: DECREMENT });
		console.log(this.counter)
	}

	reset(){
		this.store.dispatch({ type: RESET });
		console.log(this.counter)
	}
}