//this keyword

class Employee { //BluePrint of Class
    //Class variables : Static variables
    firstName; //Instance variable
    #lastName; //Private Variable
    static middleName;

    constructor() { //default constructor
        this.firstName = firstName;
    }

    setFirstName(firstName) {
        this.firstName = firstName;
        name1; // local variable
    }
    getFirstName() {
        return this.firstName;
    }
}
const emp1 = new Employee();
emp1.setFirstName("Shailesh") //setter
console.log(emp1.getFirstName()) //getter