import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AlertModule} from 'ng2-bootstrap';
import { HttpModule } from '@angular/http';
import { EmployeeService } from './services/employee.service';
import { EmployeeDetailComponent } from './employee/detail/employee-detail.component';
import { EmployeeListComponent } from './employee/list/employee-list.component';
import { EmployeeDetailOverviewComponent } from './employee/detail/overview/employee-detail-overview.component';
import { EmployeeDetailProjectComponent } from './employee/detail/project/employee-detail-project.component';
import { routing } from './routes/app.routes';
import { ErrorComponent } from './errors/error.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing,
  ],
  declarations: [
    AppComponent,
    EmployeeDetailComponent,
    ErrorComponent,
    EmployeeListComponent,
    EmployeeDetailOverviewComponent,
    EmployeeDetailProjectComponent
  ],
  providers: [
    EmployeeService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
