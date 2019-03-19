import { Component } from '@angular/core';
@Component({
  selector: 'twooutlet',
  templateUrl: './twooutlet.component.pug',
  styleUrls: ['./twooutlet.component.less'],
})           
export class TwooutletComponent {
  title = 'twooutlet';
  ngOnInit(){
    console.log('twooutlet页面启动.....');
  }
}
