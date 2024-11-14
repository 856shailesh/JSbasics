//1. Assign a function to a variable
//1.1 Function Declaration 
// Consume the variable : call the function using variable
const add = function sum(a,b){
    console.log(`Sum is ` + a+b)
}
add(2,3)

//1.2 Anon Function
const minus = function(a,b){
    console.log(`Deletion of ${a} & ${b} is ${a-b}`)
}
minus(23,43)

//1.3 Arrow Function
const divide = (a,b) => console.log(`Division of ${a} & ${b} is ${a/b}`)
divide(24,2)

//2. Pass a function as an argument to another function
//2.1 Function Declaration
function sum2(a,b,fn){
    return fn(a,b)
}
function internalSum(a,b){
    return a+b;
}
const l1 = sum2(3,4,internalSum)
console.log("Sum is : " + l1)

//2.2 Anon Function
const l2 = function (a,b,fn){
    return fn(a,b)
}
const l3 = function (a,b){
    return a-b
}
const l4 = l2(12,8,l3)
console.log("Deletion is : " + l4)

//2.3 Arrow Function
const divsion =  (a,b,fn) => { return fn(a,b) }
const internalDivide = (a,b) => { return a/b }
const l7 = divsion(56,7, internalDivide)
console.log("Division is : " + l7)

//3. Return function from a function
//3.1 Function declaraion
function f1 () {
    return function f2 (a,b) {
        console.log(`Sum is ${a+b}`)
    } 
}
const c1 = f1(); // f1 return the function f2
// now c1 is calling f2 through a & b , mind blowing
c1(32,42);

//3.2 Anon Function
const c2 = function (params) {
    return function(a,b) {
        console.log(`Deletion is ${a-b}`)
    }
}
const c3 = c2()
c3(4,52)

//Arrow Function
const c4 = () => { 
    return (a,b) => console.log(`Division is : ${a/b}`)
}
const c5 = c4()
c5(10,5)
