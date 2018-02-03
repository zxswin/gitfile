import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,PreloadingStrategy,PreloadAllModules,Routes } from '@angular/router';

import {AppComponent} from './app.component';
import {PageTwoComponent} from './pagetwo/pagetwo.component';
import {PageNoComponent} from './nopage/nopage.component';


const appRoutes: Routes=[
  {path:'pagetwo',component:PageTwoComponent,outlet: 'popup'},
  {
    path: '',
    loadChildren: './pageone/pageone.module#pageOneModule',
  },

]


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules } )
  ],
  declarations: [
    AppComponent,
    PageTwoComponent,
    PageNoComponent,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }

























