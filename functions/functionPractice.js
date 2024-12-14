//Functions
//1. function Declaration
//without return type and params
function printName(){
    console.log("Shailesh Kumar")
}
printName() 
//2. Function Expression
//2.1 Anonymous Function
const sum = function (a,b){
    let c = a + b;
    console.log (`Sum of ${a} and ${b} is ${c}`)
}
const sum3 = sum // sum is equal to everything from 5 to 8
sum3(1,2)
console.log(typeof(sum))   

//2.1.2 Anon Function without param and return type
const fName = function (){
    console.log("Shailesh");
}
fName()

//2.2 Arrow Function
//with param & return type
const minus = (a,b) => {
    let c = b-a;
    return c;
}
console.log("Minus is : " + minus(3,7))

// without param and return type
const lName = () => "Kumar" //Magic
lName() //remove {} in 1 LOC , only for Arrow Fn

//without invocation
console.log(lName) // Function , print Fn
console.log(typeof(lName)) // Function

//with Invocation
console.log(lName()) // Kumar
console.log(typeof(lName())) // String