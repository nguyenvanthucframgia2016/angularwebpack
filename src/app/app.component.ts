import { Component } from '@angular/core';
import { Student } from './student/student';

@Component({
  selector: 'my-app',
  templateUrl: './layout/index.html'
})

export class AppComponent {
    public ids: Number[] = [1, 2, 3, 4];
    public cityObjects: String[] = [
        'Ha noi',
        'Sai gon',
        'Da nang',
    ];

    public totalResult: number;

    public students: Student[] = [
        new Student(1, 'Nguyen Van A'),
        new Student(2, 'Nguyen Van B'),
        new Student(3, 'Nguyen Van C'),
        new Student(4, 'Nguyen Van D'),
    ];

    public printResult(result: number) {
        this.totalResult = result;
    }
}
