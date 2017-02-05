import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AlertModule} from 'ng2-bootstrap';
import { CityComponent } from './city/city.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  imports: [
    BrowserModule, AlertModule.forRoot()
  ],
  declarations: [
    AppComponent,
    CityComponent,
    StudentComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
