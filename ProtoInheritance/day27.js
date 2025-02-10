//Constructor function
const Person = function (firstName) {
    this.firstName = firstName
}
Person.prototype.calcAge = function (birthYear) {
    //attach a whole new method to Person Constructor fn
    return 2024 - birthYear; 
}
Person.prototype.lastName = "Laxman"; //attach variable
const p2 = new Person("Kumar") 
console.log(Person.prototype)
console.log(p2);