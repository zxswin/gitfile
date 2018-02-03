import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BirthdayComponent } from './birthday.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    BirthdayComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
