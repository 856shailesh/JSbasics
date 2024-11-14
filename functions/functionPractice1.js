//Function will accept 2 number and it will perform calcualt
/*
function calculate(a,b,fn){
    return fn(a,b)
}
const sum = function (a,b){
    return a+b;
}
const result = calculate(2,3,sum);
console.log(`Caluclate value is ${result}`)
*/

//Return a function from a function
//Psedo Code
function fname(){
    return true; // return anything String , array , Function
}
const result = fname();
console.log(`Output is ${result}`)

//Return function from function
function outputName(){
    return function sum(a,b){
        let c = a+b;
        console.log(`sum result is ${c}`)
    }
}
const result1 = outputName()
console.log(result1)
