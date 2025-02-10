//assing to variable
//passing function in a fucntion
//return function

/*
const f1 = () => {
    return (a, b) => a + b;
}

const l1 = f1();
//console.log(l1(22, 32))

const l2 = [2, 3, 22, 1, 5];
const map = l2.map((a) => a * 2);
console.log(map)
const filter = map.filter((a) => a % 4 == 0);
console.log("Fileter is : ", filter)
const reduce = filter.reduce((a, sum) => sum += a, 0);
console.log("Reduce is ", reduce)


 * Modules : CommonJS and ES6
 * Common JS , Moudles.export { map , filter , reduce}
 * const mySalary = require ("./path.js")
 * ES6 module : export {map, filter ,reduce}
 * import * as obj from "./path.js"


//var x = undefined; //how compiler see it
//console.log(x);
let x = 10;
console.log(x);
*/

function outerFunction() {
  let x = 10; // This is in the backpack

  function innerFunction() {
    console.log(x); // innerFunction remembers x
  }

  return innerFunction; // Return the function with its backpack
}

const myFunction = outerFunction(); // outerFunction finishes running
myFunction(); // Logs 10
