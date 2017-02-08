import { Component } from '@angular/core';
import { Person } from './person';
import { Company } from './company';

@Component({
  selector: 'my-app',
  templateUrl: './layout/index.html'
})

export class AppComponent {
    public personOne: Person;
    public company: Company = null;
}
