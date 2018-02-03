import { NgModule}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { RouterModule,Routes} from '@angular/router';
import { counterReducer } from './mycount/counter';
import { AppComponent } from './app.component';
import { MycountComponent } from './mycount/mycount.component';
import { MyshowComponent } from './myshow/myshow.component';
import { MycompareComponent } from './mycompare/mycompare.component';
import { TrimSpacePipe } from './mycompare/trim-space.pipe';



const appRoutes: Routes=[
  {path:'mycount',component:MycountComponent},
  {path:'myshow',component:MyshowComponent},
  {path:'mycompare',component:MycompareComponent},
]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    StoreModule.provideStore({
       counter: counterReducer 
      }),
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [ AppComponent,MycountComponent,MyshowComponent,MycompareComponent,TrimSpacePipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
}
