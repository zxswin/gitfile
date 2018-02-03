import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes} from '@angular/router';


import {PageOneComponent} from './pageone.component';
import {OnePartOneComponent} from './onepartone/onepartone';
import {OnePartTwoComponent} from './oneparttwo/oneparttwo';


const pageoneRoutes: Routes=[
  {path:'pageone',component:PageOneComponent,
   children:[
     {path:'pageonepart1',component:OnePartOneComponent},
     {path:'pageonepart2',component:OnePartTwoComponent}
   ]
  }
]



@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild(pageoneRoutes)
  ],
  declarations: [
    PageOneComponent,
    OnePartOneComponent,
    OnePartTwoComponent
  ],
  exports: [
    RouterModule
  ],
})
export class pageOneModule { }

























