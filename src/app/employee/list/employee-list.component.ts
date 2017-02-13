import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';

@Component({
    selector: 'employee-list',
    templateUrl: './index.html'
})

export class EmployeeListComponent implements OnInit {
    public employees: Employee[];
    public loading: boolean = false;
    public errorMessage: string = '';

    constructor(private employeeService: EmployeeService) {}

    ngOnInit() {
        this.getListEmployee();
    }

    public getListEmployee() {
        this.loading = true;
        this.employeeService.getListEmployee()
            .subscribe(
                (response) => {
                    this.employees = response;
                },
                (error) => {
                    this.errorMessage = error;
                    this.loading = false;
                },
                () => {
                    this.loading = false;
                }
            );
    }
}