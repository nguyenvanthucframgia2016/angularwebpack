import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AlertModule} from 'ng2-bootstrap';

@NgModule({
  imports: [
    BrowserModule, AlertModule.forRoot()
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
