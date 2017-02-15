import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { EmployeeService } from '../../services/employees/employee.service';

@Component({
    selector: 'employee-delete',
    template: ''
})

export class EmployeeDeleteComponent implements OnInit, OnDestroy {
    employeeId: number;
    subscription: Subscription;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private employeeService: EmployeeService
    ) {}

    ngOnInit() {
        this.subscription = this.activatedRoute.params.subscribe((params) => {
            this.employeeId = params['id'];
        });

        if (this.employeeId) {
            this.employeeService.deleteEmployee(this.employeeId)
                .subscribe(
                    (response) => {
                        if (response) {
                            this.router.navigate(['employee/list']);
                        }
                    },
                    (error) => {
                        console.log(error);
                    }
                );
        }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}