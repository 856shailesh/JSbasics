/**
History of JS
DataTypes
Primitive : Boolean , Number , String , null , undefined , big int , symbol
Object ; function , array

Difference between let var const
var : can redeclar and reassign , support hoisting , global scope
let ; can't redeclare and only reassign , dont support hoisting , block scope
const : no redeclare and no reassign , dont support hoisting , block scope

What is coersion : Automatic data conversion
Nan
map , filter , reduce
*/

const arr = [1, 2, 3, 4, 5,6]
console.log("Initial array is ",arr)
const output = arr.map((a) => a * 2).filter((a) => a%3 == 0).reduce((cv,sum) => sum += cv , 0)
console.log(output)


