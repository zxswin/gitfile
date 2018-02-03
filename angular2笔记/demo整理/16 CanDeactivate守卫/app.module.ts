import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes} from '@angular/router';
import {pageOneModule} from './pageone/pageone.module';
import { AuthGuard } from './auth-guard.service';

import { CanDeactivateGuard }    from './can-deactivate-guard.service';


import {AppComponent} from './app.component';
import {PageTwoComponent} from './pagetwo/pagetwo.component';
import {PageNoComponent} from './nopage/nopage.component';

const appRoutes: Routes=[
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
    PageTwoComponent,
    PageNoComponent
  ],
   providers: [
    AuthGuard,
    CanDeactivateGuard
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }

























