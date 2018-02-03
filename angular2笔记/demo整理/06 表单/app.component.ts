import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  hero={
    id: 1,
    name: "英雄一号",
    power: "五颗星级别",
    age:45
  };
  powers=[
    '技能1',
    '技能2',
    '技能3',
    '技能4'
  ];
  submitted=false;
  onSubmit(){this.submitted=true;}

}
