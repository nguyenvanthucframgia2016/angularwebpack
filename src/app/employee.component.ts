import { Component, Input } from '@angular/core';

@Component({
    selector: 'employee',
    template: `<p>{{ name }}</p>`
})

export class EmployeeComponent {
    @Input() name: string;
}