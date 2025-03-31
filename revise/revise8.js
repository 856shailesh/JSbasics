/*
JS : high level , interpretted language 
Feature : client side ,server side scripting
1995 : JS was born . Mocha > LiveScreipt > JavaScirpt (ride popularity of java)
everyone was coming with their flavour , so ECMA script was born
2010 : NodeJS was born , not just for browsers , server side scripting also
2015 : ES6 , major changes

Primitive data types : boolean , String , Number , null , undefined , bigInt , Symbol 

Coersion : automatic conversion of data type
NaN = not a number

Default true values in boolean
Undefined : a data type 
Non defined : is a kind of error , if you use let without defining , directly print it

var : can redeclare , reassing , global , support hoisting
let : can't redeclare , only reassign , block scope , don't support
const : can't redeclare , can't reassign , block scope , don't support


// Classic for loop
for (let i = 0; i < 5; i++){
    console.log(`Current value is ${i}`);
} 

// For of : Array , Strings
let value = [12, 2, 32 ];
for (const b of value) {
    console.log(`Current value is ${b}`);
}
for (let char of "Hello") {
    console.log(`Current char is ${char}`)
}

// For in : Property of Objects
const person = { name: "Alice", age: 25, city: "New York" };
for (let key in person) {
    console.log(key, ":", person[key]);
}

// For each : iterate over array , callback for each element
const numbers = [12, 21, 31];
numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});
*/

/*
Type check : == value , === strict : type check

callback functions : those functions whicha are passed as a parameter in other functions 
and are at the mery of other function to be invoked


let c = function () {
    return function sum(a, b) {
        return a + b;
    }
}
const d = c();
console.log(d(4, 5));

//callback function : those fn which are passed as arguments to other functions and are called later (after some operation)
Hoisting : using variable before even declaring it
*/





















