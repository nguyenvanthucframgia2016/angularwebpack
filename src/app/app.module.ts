import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AlertModule} from 'ng2-bootstrap';
import { WelcomePipe } from './pipes/welcome.pipe';
import { StringFormatPipe } from './pipes/string-format.pipe';
import { NumberExpressionPipe } from './pipes/number-expression.pipe';
import { RepeatPipe } from './pipes/repeat.pipe';

@NgModule({
  imports: [
    BrowserModule, AlertModule.forRoot()
  ],
  declarations: [
    AppComponent,
    WelcomePipe,
    StringFormatPipe,
    NumberExpressionPipe,
    RepeatPipe,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
