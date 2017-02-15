import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../../services/employees/employee.service';
import { Employee } from '../../models/employee';

@Component({
    selector: 'employee-edit',
    templateUrl: './index.html'
})

export class EmployeeEditComponent implements OnInit, OnDestroy {
    public employeeId: number;
    public subscription: Subscription;
    public employee: Employee;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private employeeService: EmployeeService
    ) {}

    ngOnInit() {
        this.subscription = this.activatedRoute.params.subscribe(
            params => {
                this.employeeId = params['id'];
            }
        );

        if (this.employeeId) {
            this.employeeService.getEmployee(this.employeeId)
                .subscribe(
                    (response) => {
                        this.employee = response;
                    },
                    (error) => {
                        console.log(error);
                    }
                );
        }
    }

    onSubmit(data: any) {
        this.employeeService.updateEmployee(this.employeeId, data.value)
            .subscribe(
                (response) => {
                    if (response) {
                        this.router.navigate(['/employee/list']);
                    }
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}