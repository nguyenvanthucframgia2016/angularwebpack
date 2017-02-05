import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AlertModule} from 'ng2-bootstrap';
import { ChildComponent } from './child_component/child.component';

@NgModule({
  imports: [
    BrowserModule, AlertModule.forRoot()
  ],
  declarations: [
    AppComponent,
    ChildComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
