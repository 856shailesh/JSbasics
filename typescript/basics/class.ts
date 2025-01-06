class Employee {
    public firstName: string; //Instance Variables
    private age: number;
    static companyName: String;

    constructor(firstName: string , age: number) {
        this.firstName = firstName;  
        this.age = age;
    }
    getFullName() : string { //Method
        return this.firstName;
    }
    public getAge() :number{ //if private can't use it
        return this.age;
    }
}
const emp1 = new Employee("Shailesh", 24);
Employee.companyName = "IHS"; //since this is static
console.log(emp1.getFullName() , emp1.getAge() , Employee.companyName)