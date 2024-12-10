//Object inside an Object

const employer = {
    employerName : "AJ",
    empCount : 1
}
const emp = {
            employ : employer,
            age: 20,
            empName : "Shailesh"
}
console.log(emp) //Output is JS Object
//convert Object into JSON
const empJson = JSON.stringify(emp)
//console.log(empJson) //Output is JSON

const convertJSontoObject = JSON.parse(empJson)
console.log(convertJSontoObject)


/*
//const name = ["shailesh", "kumar"]

console.log(emp["empName"]) //Retrieve key from object
console.log(emp.age) // dot operator
console.log(emp.marks)
//we are allowed to modify the object
emp.marks.push(99)
console.log(emp.marks)

//Adding a new key to the Object
emp.address = "Delhi";
emp.category = "male";
emp.logout = function () {
    console.log("Logged Out")
}
console.log(emp)
*/