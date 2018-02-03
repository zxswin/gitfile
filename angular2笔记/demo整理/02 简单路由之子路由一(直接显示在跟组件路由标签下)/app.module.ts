import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes} from '@angular/router';
import {pageOneModule} from './pageone/pageone.module';


import {AppComponent} from './app.component';
import {PageOneComponent} from './pageone/pageone.component';
import {PageTwoComponent} from './pagetwo/pagetwo.component';
import {PageNoComponent} from './nopage/nopage.component';

const appRoutes: Routes=[
  {path:'pageone',component:PageOneComponent},
  {path:'pagetwo',component:PageTwoComponent},
  {path: '',   redirectTo: '/pagetwo', pathMatch: 'full' },
  {path:'**',component:PageNoComponent}
]


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    pageOneModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
    PageNoComponent
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }

























