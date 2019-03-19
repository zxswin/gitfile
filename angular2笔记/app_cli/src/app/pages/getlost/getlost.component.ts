import { Component } from '@angular/core';
@Component({
  selector: 'getlost',
  templateUrl: './getlost.component.pug',
  styleUrls: ['./getlost.component.less'],
})
export class GetlostComponent {
  title = 'getlost';
  ngOnInit(){
    console.log('getlost页面启动.....');
  }
}
