import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Student } from './student';

@Component({
    selector: 'student-app',
    templateUrl: './index.html'
})

export class StudentComponent {
    @Input('studentObjects') studentArray: Student[];
    @Output('addNumberEvent') addNumEvent = new EventEmitter<number>();
    public num1: string = '';
    public num2: string = '';

    public addNumber() {
        let total: number = parseInt(this.num1) + parseInt(this.num2);
        this.addNumEvent.emit(total);
    }
}