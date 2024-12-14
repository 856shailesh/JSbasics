/*
1995 : JS was born , 
1997 : ECMA script
2015 : ES6 , with major changes
ES6+ or ES next

Data Types in JS
Primitive : String , Boolean , Number , Null , Undefined
Object : Array , function , map 

var : Can redeclare and reassign
let : Cannot redeclare , only reassing
Const: No redeclare , no reassign

coercion : manual and automatic
difference between if else and switch : if range use if else , if const values use switch



let l1 = 23
let l2 = "23"
if (l1 == l2) console.log("true");
if (l1 === l2) console.log("true");
else console.log("false")

let v1 = "Tue"
switch (v1){
    case ("Mon") :
        console.log("Monday")
        break
    case ("Tue"):
        console.log("Tuesday")
        break
    default :
        console.log("Not a valid one");
}

for (let i = 0; i < 10; i++){
    console.log("Shailehs"+i)
}

let i = 4
while (i > 0) {
    console.log("While loop"+i )
    i--;
}

const val = [2, 3, 4, 34, 23, 12]
for (const v of val) {
    console.log(v)
}

Function : 
1. Function defination
2. Function expression : Anon and arrow function

1. Assiging fn to a variable
2. Passing function in a function param
3. Returning funciton from a function


const l = (a, b) => a + b;
const l1 = l(2, 3);
console.log(l1)
*/


const anonFn = function () {
    console.log("This is f1")
    return  (a, b) => a+b
}

const f = anonFn()
const newFunc = f(2, 3)
console.log(newFunc)
