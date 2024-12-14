/*
console.log(x) //undefined
console.log(z)
console.log(y) //Reference Error , Cannot acces Y before intitialization

var x = 9 
let y = 20
const z = 22
*/

var x = 9;
function calc() {
    x++;
}
calc();
console.log(x);