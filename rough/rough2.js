/*
Data Type is Js
1. Primitive Data Tyep : String, Number ,boolean , null , undefined
2. Ojbect : Array , Map , Function , Set

Let , var , const
var : can be redeclared and reassigned
let ; cannot redeclare but only reassign
const : cannot reassign also.


function sum(a, b) {
    return a+b
}

const a = sum(2, 3)
console.log(typeof(sum))


var a = 2
var a = 3 // Can Redeclare & reassign
console.log(a)

let b = 4
b = 5 // No redeclare , only reassign
console.log(b)

const c = 3
c = 5 // Error , No redeclare No Reassign
console.log(c)


let a = 3
let b = "Shailesh"
let c = a + b
console.log(c)
console.log(typeof (c)) // Coercion

let v1 = "23"
let v2 = Number(v1)
console.log(v2)
console.log(typeof (v2))

let c1 = "kumar"
let c2 = Number(c1)
console.log(c2)
console.log(typeof(c2))


//if else
let v = 89
if (v > 18 && v < 60)
    console.log("Adult")
else if (v < 18) console.log("Teen")
else if (v > 60) console.log("Senior Citizen")
else console.log("Not a correct age")

//Switch Case
let day = "wed"
switch (day) {
    case "Mon":
        console.log("Monday")
        break;
    case "Tue":
        console.log("Tuesday")
        break
    default:
        console.log("Not a valid weekday")
        break;
}


let c1 = 10
for (let i = 0; i < c1; i++){
    console.log(i+ "hello 23")
}
let marks = [2,3,44,23,21]
for (let i of marks)
    console.log(i)

let c2 = 2
while (c2 > 0) {
    console.log("Test")
    c2--
}

Functions
1. Function declarion
2. Fucntion expression
    Anon function , Arrow function

//1. Function declarion
function sum(a, b) {
    return a+b
}
const c2 = sum(2, 3)
console.log(c2)

//2. Anon function
const v1 = function (a, b) {
    return a+b
}
console.log(v1(3, 3))
//3. Arrow Function
const v4 = (a, b) => { return a + b }
console.log(v4(43, 34))


//2.1 Pass a function as an argument to antoher funciton
function v6(a, b, fn) {
    return fn(a,b)
}
function sum(a, b) {
    return a+b
}

const v7 = v6(2, 3, sum)
console.log(v7)

//2.2 Anon function
const a1 = function (a, b, fnn) {
    return fnn(a,b)
}
const a2 = a1(34, 34, sum)
console.log(a2)
//2.3 Arrow function
const a3 = (a, b, func) => { return func(a, b) }
const a4 = a3(2, 23, sum)
console.log(a4) 
*/
//3.1 Returning a function from a function
function b2() {
    return function sum(a, b) {
        return a+b
    }
}
const b3 = b2();
const b4 = b3(2, 3)
console.log(b4)

//3.2 Anon function
const a1 = function () {
    return function (a, b) {
        return a - b;
    }
}

const a2 = a1();
const a3 = a2(23, 2)
console.log(a3)

//3.3 Arrow Function
const v1 = () => {
    return (a,b) => {
        return a * b;
    }
}
const v2 = v1()
const v3 = v2(2, 23)
console.log(v3)