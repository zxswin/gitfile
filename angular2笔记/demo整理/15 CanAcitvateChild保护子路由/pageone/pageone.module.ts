import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes} from '@angular/router';
import { AuthGuard } from '../auth-guard.service';

import {PageOneComponent} from './pageone.component';
import {OnePartOneComponent} from './onepartone/onepartone';
import {OnePartTwoComponent} from './oneparttwo/oneparttwo';


const pageoneRoutes: Routes=[
  {path:'pageone',component:PageOneComponent,
  canActivate: [AuthGuard],
   children:[
     {
       path: '',
       canActivateChild: [AuthGuard],
       children: [
         {path:'pageonepart1',component:OnePartOneComponent},
         {path:'pageonepart2',component:OnePartTwoComponent},
         {path: '', component: OnePartTwoComponent },
         {path:'**',component:OnePartTwoComponent},
       ]
     }
   ]
  },
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
  ]
})
export class pageOneModule { }

























