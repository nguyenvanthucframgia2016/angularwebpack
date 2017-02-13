import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: '<employee-detail>',
    templateUrl: './index.html'
})

export class EmployeeDetailComponent implements OnInit, OnDestroy {
    public id: number;
    public employee: Employee;
    public subscription: Subscription;
    public loading: boolean = false;
    public errMessage: string = '';

    constructor(private employeeService: EmployeeService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.subscription = this.activatedRoute.params.subscribe(
            params => {
                this.id = params['id'];
            }
        );

        this.getDetailEmployee(this.id);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    getDetailEmployee(id: number) {
        this.loading = true;
        this.employeeService.getDetailEmployee(id)
            .subscribe(
                (response) => {
                    this.employee = response;
                },
                (error) => {
                    this.loading = false;
                    this.errMessage = error;
                },
                () => {
                    this.loading = false;
                }
            );
    }
}