import { Person } from './person';

export class Company {
    constructor(public id: number, public person: Person) {}
}