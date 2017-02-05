import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AlertModule} from 'ng2-bootstrap';
import { EmployeeComponent } from './employee.component';

@NgModule({
  imports: [
    BrowserModule, AlertModule.forRoot()
  ],
  declarations: [
    AppComponent, EmployeeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
