import { Component } from '@angular/core';
@Component({
  selector: 'products-show',
  templateUrl: './products-show.component.pug',
  styleUrls: ['./products-show.component.less'],
})     
export class ProductsShowComponent {
  title = 'products-show';
  ngOnInit(){
    console.log('products-show页面启动.....');
  }
}
