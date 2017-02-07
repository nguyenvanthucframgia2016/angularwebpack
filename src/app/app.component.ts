import { Component } from '@angular/core';
import { Name } from './name';
import { Address } from './address';
import { Person } from './person';

@Component({
  selector: 'my-app',
  templateUrl: './layout/index.html'
})

export class AppComponent {
    object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
    public address1: Address = new Address('Ung hoa', 'Ha noi', 'Viet nam');
    public addresses: Address[] = [
        this.address1,
        new Address('Moc chau', 'Dien Bien', 'Lao Cai'),
        new Address('Nga Son', 'Na Son', 'Thanh Hoa'),
    ];
    public person: Person = new Person(
        1,
        new Name('Nguyen', 'Sa'),
        new Date(1994, 12, 11),
        this.address1
    );
}
