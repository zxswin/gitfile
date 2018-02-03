import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TrimSpacePipe } from './trim-space.pipe';
import { AttackService } from './attack.service';
import { EventChildComponent } from './event-child.component';



@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    TrimSpacePipe,
    EventChildComponent
  ],
  providers:[AttackService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
