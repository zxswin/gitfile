import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes} from '@angular/router';


import {OnePartOneComponent} from './onepartone/onepartone';
import {OnePartTwoComponent} from './oneparttwo/oneparttwo';


const pageoneRoutes: Routes=[
  {path:'pageonepart1',component:OnePartOneComponent},
  {path:'pageonepart2',component:OnePartTwoComponent},
]


@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild(pageoneRoutes)
  ],
  declarations: [
    OnePartOneComponent,
    OnePartTwoComponent
  ]
})
export class pageOneModule { }

























