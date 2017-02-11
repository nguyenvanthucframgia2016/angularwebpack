import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AlertModule} from 'ng2-bootstrap';
import { HttpModule } from '@angular/http';

import { GitHubService } from './services/github.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    GitHubService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
