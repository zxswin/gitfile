
import { Component} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/interval';
import { ActionReducer, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Store } from '@ngrx/store';
import {Http,RequestOptions,Headers,Jsonp,URLSearchParams,RequestMethod} from '@angular/http';
import {counterReducer } from './counter';


@Component({
	selector: 'mycount',
	template: `
	    <p>这个组件使用了redux进行状态储存和管理,切换组件的时候数据可以保存</p>
		<p>增加名单：</p>
		<p><button class="getBtn" (click)="getData()">获取数据</button></p>
		<p>姓名：<input type="text" value="" placeholder="姓名" name="username" id="username"/> 年龄：<input type="text" value="" placeholder="年龄" name="userage" id="userage"/><button class="addBtn" (click)="addData()">增加人选</button></p>
		<p class="p1">入选名单列表：<p>
		<li  *ngFor="let data of (counter | async);let i=index">
		    <span >姓名：{{data.name}}</span>
		    <span>年龄：{{data.age}}</span>
			<span>状态：<button (click)="selectData(i)" [ngClass]="{special: data.state}">候选人</button></span>
	     	<button (click)="deleteData(i)">点击删除</button>
		</li>
		
	`,
	 styles: ['.special { background: #f00;}.getBtn{margin:10px 0;padding:10px;}.p1{margin:10px 0;}.addBtn{margin:0 10px;}']
})
export class MycountComponent {
	dataList:any;
	counter:any;
	constructor(
		private store:Store<any>,
		private http: Http,private jsonp: Jsonp
	){}

	ngOnInit(){
	   this.counter=this.store.select('counter');
    }

	getData(){
        this.http.get('app/mycount/data.json').map(res => res.json()).subscribe(v=>{
		   this.dataList=v.data;
           this.store.dispatch({ type: "getData",payload:this.dataList});
        },
            err => { console.log(err); },
        );
	}

	deleteData(i:any){
		this.counter.subscribe((v:any)=>{
			 v.splice(i,1);
		     this.store.dispatch({ type: "deleteData" ,payload:v});
		});
	}
	addData(){
		let username=document.getElementById("username")['value'];
		let userage=document.getElementById("userage")['value'];
		if((username==="")||(userage==="")){
			alert('您填写的信息不完整哦！')
           return;
		}
		let json={
			"name":"",
			"age":"",
			"state":false
		};
		json.name=username;
		json.age=userage;
		json.state=false;

		this.counter.subscribe((v:any)=>{
			v.push(json);
		    this.store.dispatch({ type: "addData" ,payload:v});
		});
	}
	selectData(i:any){
		this.counter.subscribe((v:any)=>{
			v[i].state=!v[i].state;
		    this.store.dispatch({ type: "selectData" ,payload:v});
		});
		
	}
	
}

