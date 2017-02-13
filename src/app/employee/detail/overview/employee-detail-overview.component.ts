import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'employee-detail-overview',
    templateUrl: './index.html'
})

export class EmployeeDetailOverviewComponent implements OnInit, OnDestroy {
    public parentRouterId: number;
    public subscription: Subscription;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        // Lay id truyen tu router cha
        this.subscription = this.activatedRoute.parent.params.subscribe(
            params => {
                this.parentRouterId = params['id'];
            }
        );

        console.log('parent id = ' + this.parentRouterId);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}