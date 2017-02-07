import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AlertModule} from 'ng2-bootstrap';
import { TemConvertorPipe } from './pipe/tem-convertor.pipe';

@NgModule({
  imports: [
    BrowserModule, AlertModule.forRoot()
  ],
  declarations: [
    AppComponent,
    TemConvertorPipe,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
