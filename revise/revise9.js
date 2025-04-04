/**
 * JavaScript : high level / dynamic  programming language , Features : server side scripting , client side scripting
 * single threaded 
 * 
 * var : can redeclare , reassign , support hoisting , global scope
 * let : no redeclare , only reassing , no hoisting , block scope
 * const : no redeclare , no reassign , no hoisting , block scope
 * 
 * Callback function : Those functions whicha are passed as an argument in other funciton and are called after ceretain time ( flow of code)
 * 
 * CommonJS and ES6 module
 * Export in CommonJSu
 * 
 */

//Named Export
export function add(a, b) {
    return a + b;
}
export function subtract(a, b) {
    return a - b;
}

//Export all at once
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
export { add, subtract };
    
//Defautl Export
export default function greet(name) {
    return `Hello, ${name}!`;
}








// // Exporting single function
// function add(a, b) {
//     return a + b;
// }
// module.exports = add;  

// // Exporting multiple functions as an object
// function addition(a, b) {
//     return a + b;
// }
// function subtract(a, b) {
//     return a - b;
// }
// module.exports = { addition, subtract };  


// function test(a,b, fn) {
//     let c = fn(a,b);
//     console.log("Sum is ",c)
// }

// function sum(a, b) {
//     return a + b;
// }

// test(2,3,sum)