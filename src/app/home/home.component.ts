import { Component } from '@angular/core';
// navigating
import { Router } from '@angular/router';

@Component({
    selector: 'home-app',
    templateUrl: './index.html'
})

export class HomeComponent {
    // Navigating
    constructor(private router: Router) {}

    gotoEmployeePage() {
        this.router.navigate(['employee']);
    }
}