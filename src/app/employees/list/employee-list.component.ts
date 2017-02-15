import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employees/employee.service';
import { Employee } from '../../models/employee';

@Component({
    selector: 'employee-list',
    templateUrl: './index.html'
})

export class EmployeeListComponent implements OnInit {
    loading: boolean = false;
    errorMessage: string = '';
    employees: Employee[];

    constructor(private employeeService: EmployeeService) {}

    ngOnInit() {
        this.getListEmployee();
    }

    getListEmployee() {
        this.loading = true;
        this.employeeService.getListEmployee()
            .subscribe(
                (response) => {
                    this.employees = response;
                },
                (error) => {
                    this.loading = false;
                    this.errorMessage = error;
                },
                () => {
                    this.loading = false;
                }
            )
    }
}