import { Name } from './name';
import { Address } from './address';

export class Person {
    constructor(
        public id: number,
        public name: Name,
        public date: Date,
        public address: Address
    ) {}
}