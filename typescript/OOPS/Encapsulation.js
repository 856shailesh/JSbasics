"use strict";
class Employe {
    constructor(empID) {
        this.empID = empID;
    }
    setEmpID(empID) {
        this.empID = empID;
    }
}
const emp2 = new Employe(1);
console.log(emp2);
