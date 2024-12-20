class Employee {
    #firstname; //Private Variable
    constructor(firstname) {
        this.#firstname = firstname;
    }
    getFirstname() {
        return this.#firstname;
    }
}
const emp = new Employee("Shailesh")
console.log(emp.getFirstname())
