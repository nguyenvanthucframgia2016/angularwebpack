import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routing } from './routes/app.routes';
import { HttpModule } from '@angular/http';
import { PaginationModule } from 'ng2-bootstrap';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employees/employee.component';
import { NotFoundComponent } from './errors/not-found.component';
import { EmployeeService } from './services/employee.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing,
        PaginationModule.forRoot(),
        FormsModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        EmployeeComponent,
        NotFoundComponent,
    ],
    providers: [
        EmployeeService,
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
