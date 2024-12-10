/*
Data types in Js
1. Primitve : String , Number , Boolean , Null , Undefined
2. Objects : Array , Map , Function

var : can redeclar and reassing
let : no redeclare , only reassign
const ; No redeclare and no reassign

Coersion : automatic conversion , Like String to number
== , check the value
=== , check the type also
Boolean false : fasle , zero , undefined , null


let v = Mon;
switch (v) {
    case "Mon":
        console.log("Monday")
        break
    case "Tue":
        console.log(Tuesday);
        break
    default :
        console.log("Please enter correct");
} 

//for of loop
let marks = [1,2,3,4,5]
for (let i of marks){
    console.log(i)
}
Functions
Function declaration 
Function expression > Arrow function , anon function
Higher order function : function to a variable , call function in param
return function from a function
*/

const c1 = (a, b) => a+b
//console.log(c1(2, 3))

let s = "Shailesh kumar is  true OG"
let s1 = 'shailesh'
let s2 = `shailesh`
let s3 = new String("Shailesh")
console.log(s.indexOf("OG"))

