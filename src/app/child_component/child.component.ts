import { Component, Input } from '@angular/core';

@Component({
    selector: 'child',
    templateUrl: './index.html'
})

export class ChildComponent {
    @Input() user : any;
}