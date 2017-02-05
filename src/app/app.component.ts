import { Component } from '@angular/core';
import { NumEnum } from './numEnum';
import { Employee } from './employee';

@Component({
  selector: 'my-app',
  templateUrl: './layout/index.html'
})

export class AppComponent {
    public isValid = true;
    public ids = [1, 2, 3, 4, 5];
    public numEnum = NumEnum;
    public employee1 = new Employee(1, 'Nguyen Sa');
    public employee2:Employee;
}
