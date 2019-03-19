import { Component, Injector } from '@angular/core';

@Component({
  selector: 'view-child',
  templateUrl: './view-child.component.pug',
  styleUrls: ['./view-child.component.less'],
})
export class ViewChildComponent {
  name: string = 'childName';
  
  greeting(name: string) {
    console.log('hello ' + name);
  }
}


