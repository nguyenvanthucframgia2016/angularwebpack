export class Employee {
    public id: number;
    public name: string;
    public age: number;
    public createdAt: Date;

    constructor(id: number, name: string, age: number, createdAt: Date) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.createdAt = createdAt;
    }
}