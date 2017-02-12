import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';

@Component({
    selector: 'employee-app',
    templateUrl: './list.html'
})

export class EmployeeComponent implements OnInit {
    employees: Employee[];
    loading: boolean = false;
    errorMessage: string = '';
    public totalItems: number = 50;
    public currentPage: number = 1;

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
                    this.errorMessage = error;
                    this.loading = false;
                },
                () => {
                    this.loading = false;
                }
            );
    }
}