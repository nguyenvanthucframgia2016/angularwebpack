import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { routing } from './routes/app.routes';
import { FormsModule } from '@angular/forms';

import { EmployeeAddComponent } from './employees/add/employee-add.component';
import { EmployeeListComponent } from './employees/list/employee-list.component';
import { EmployeeDeleteComponent } from './employees/delete/employee-delete.component';
import { EmployeeEditComponent } from './employees/edit/employee-edit.component';
import { NotFoundComponent } from './errors/not-found.component';

import { EmployeeService } from './services/employees/employee.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing,
        FormsModule,
    ],
    declarations: [
        AppComponent,
        NotFoundComponent,
        EmployeeAddComponent,
        EmployeeListComponent,
        EmployeeDeleteComponent,
        EmployeeEditComponent,
    ],
    providers: [
        EmployeeService,
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
