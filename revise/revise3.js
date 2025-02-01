/**
 * JS : high level language , client side scripting (directly on browser) , server side dev : using node.js
 * Interpreted langa : directly from code to browser 
 * Data Types : BigInt , Symbol , Number , String , Boolean , Null , Undefined
 * Default false in Boolean :  Zero , Emoty String , Undefiend , Null , Nan
 * Difference between let var const
 * var : redeclare and reassing , support Hoisting , Global Scope
 * let : only reassing , no Hoisting , Block Scope
 * const : no redeclare , no reassing , no Hoisting , Block scope
 Sync : goes in order 
 Async : goes in background to complete , doens't go in order

 Hoisting : process in which we are able to use the variable even before declareing it.
 var support it
 console.log(x)
 var x = 10;

//Pass a function in parameter
const f1 = (a, b, fn) => fn(a, b);
function sum(a, b) {
    return a + b;
}
f2 = f1(4, 3, sum)
console.log(f2)

// Return a function from a function
const f1 = () => {
    return function sum(a, b) {
        return a + b;
    }
}
const c = f1(); // 
console.log(c(4,8))


let c = [1, 3, 4, 5, 6, 7];
console.log(c.map((a) => a * 2).filter((a)=>a%4).reduce((a,sum)=> sum += a,2))
let salary = 100;
//common JS
export {c , salary}
*/


