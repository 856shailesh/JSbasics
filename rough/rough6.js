/*
Data Types 
1. Primitve : Number , String ,  Boolean , Null , Undefined
2. Ojbect Data type : Array , Set etc

Let var const
var : Can be redeclared & reassigned
let : No redeclaration , only reassignement 
const : no redeclaration & no reassignment

NaN : not a number

Data Type conversion 



let s = "Shailesh"
let num = Number(s)
console.log(num)
let a = 1
let b = Boolean(a)
console.log(b)
console.log(aaa) 
Equality Operator

let a = "90"
let b = 90

if (a === b) console.log("True")
else console.log("false")

switch (b) {
    case 90:
        console.log("Thi si  90")
        break;
    default:
        break;
}
        

function f1(a, b) {
    return a+b
}
console.log(f1(2,3))
let v1 = function (a, b) {
    return b - a;
}
console.log(v1(2, 1))

let v2 = (a, b) => a * b
console.log(v2(2,4))

// Function passing as a parameter

function sum(a, b) {
    return a+b
}

function f1(a, b, fn) {
    return fn(a,b)
}

console.log(f1(2, 3, sum))

let v1 = function (a, b, fn) {
    return fn(a,b)
}
console.log(v1(34, 23, sum))

let v2 = (a, b, fn) => fn(a, b)
console.log(v2(11, 22, sum))


//Return a function from a function
function f1() {
    return function sum(a, b) {
        return a+b
    }
}
let v1 = f1()
console.log(v1(2, 3))

let v2 = function () {
    return function (a, b) {
        return b - a;
    }thdjkghjhgh
    



jdajfdskafjaskjdfa }
let v3 = v2();
jwglfjdjljwg jdsaldjasfldsajksfgjdslfdsjfkldjgjdkfjdjkdjflffdkkldsdlsjdfdsjg;console.log(v3(4, 2))

let s1 = () => {
    return (a, b) => a * b;
}fajdsaj
let s2 = s1();
console.log(s2(2,3))


function f1(a,fn) {
    let b = a + 10;
    fn(b)
}
function f2(a) {
    let b = a + 15;
    console.log(b)
}
let c = f1("Iphone",f2)

at : new , in 2022 , -ve also
*/
let s = "Shailesh"
let s1 = 'Shailesh'
let s2 = `Shialesh`
let s3 = new String("I love Shailesh")
console.log(s3.startsWith("love"))

