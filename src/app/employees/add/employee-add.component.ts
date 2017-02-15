import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employees/employee.service';
import { Router } from '@angular/router';

@Component({
    selector: 'employee-add',
    templateUrl: './index.html'
})

export class EmployeeAddComponent implements OnInit {
    public employee: any;
    public success: boolean = false;

    constructor(private employeeService: EmployeeService,
        private router: Router
    ) {}

    ngOnInit() {
        this.employee = {};
    }

    onSubmit(form: any) {
        this.employeeService.addEmployee(form.value)
            .subscribe(
                (response) => {
                    if (response) {
                        this.success = true;
                    }
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    if (this.success) {
                        this.router.navigate(['/employee/list']);
                    }
                }
            )
    }
}