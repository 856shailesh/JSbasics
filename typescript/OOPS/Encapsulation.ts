class Employe {
    private empID: number;
    constructor(empID: number) {
        this.empID = empID;
    }
    public setEmpID(empID: number): void {
        this.empID = empID;
    }
}
const emp2 = new Employe(1);
console.log(emp2)