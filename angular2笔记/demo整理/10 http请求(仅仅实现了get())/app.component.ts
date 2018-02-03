import { Component } from '@angular/core';
import {Http,RequestOptions,Headers,Jsonp,URLSearchParams,RequestMethod} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  template:
      `
      <button (click)="getJson()">点击我get()异步获取数据</button>
      <button (click)="postJson()">点击我post()异步获取数据</button>
       <button (click)="jsonpJson()">点击我jsonp异步获取数据</button>
      <ul *ngIf="flag">
        <li *ngFor="let item of mobiles">{{item.name}}</li>
      </ul>
  `
})
export class AppComponent {
  mobiles={};
  flag=false;
  constructor(private http: Http,private jsonp: Jsonp) {};
  ngOnInit(){
    console.log('我执行了.....');
    

  };
  getJson(){
    let params = new URLSearchParams();
    params.set('name', 'huge');
    this.http.get('app/mobile.json',{ search: params}).map(res => res.json()).subscribe(v=>{
      this.mobiles = v;
      this.flag=true;
      console.log(v);
    },
     err => { console.log(err); },
    );
    
  }
  postJson(){
    //  let body = JSON.stringify({
    //     code : "mk200"
    // });
    // let headers = new Headers();
    //   headers.append('Content-Type', 'application/json');
    //   // headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //   this.http.post('app/mobile.json', body, {
    //     headers: headers
    //     })
    //    .map(res => res.json()).subscribe(
    //    data=>{console.log(data) },
    //    err => { console.log(err); },
    //   )

    let params = new URLSearchParams();
    params.set('name', 'huge');
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('app/mobile.json',{ search: params}, {headers:headers}).subscribe(
      data=>{console.log(data) },
      err => { console.log('出错了'+err); },
      )
    
  }
  jsonpJson(){
    let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');
    this.jsonp.get('https://api.douban.com/v2/book/1220562',{ search: params}).map(res => res.json()).subscribe(
      data => {console.log(data);},
      err => { console.log('错误了：'+err); },
      );
  }
}
