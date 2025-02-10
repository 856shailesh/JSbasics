"use strict";
class Employee {
    constructor(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }
    getFullName() {
        return this.firstName;
    }
    getAge() {
        return this.age;
    }
}
const emp1 = new Employee("Shailesh", 24);
console.log(emp1.getFullName(), emp1.getAge());
