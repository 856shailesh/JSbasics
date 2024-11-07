let num1 = 5;
let num2 = 2;
let num3 = num1+num2
console.log(num3)

let num4 = num1**num2
console.log(num4)

//data type conversion
let age = 70; // number
let friendAge = "30"; //String

let sAge = String(age) //Convert number to String
console.log(sAge)
console.log(typeof(sAge));

let nextYearAge = sAge+1; // Coercion , automatic Conversion
console.log(nextYearAge)
console.log(typeof(nextYearAge))

//String to a number
let rollno = "56"
let numRollno = Number(rollno)
numRollno += 2;
console.log(numRollno) //58

//Convert a real String to Number
let newName = "Shailesh"
let rollNum = Number(newName)
console.log(rollNum) // NaN : Not a number
console.log(typeof(rollNum))