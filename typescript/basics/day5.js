"use strict";
let firstName = "2"; // same concept below
function calculate(a, b, cb) {
    const c1 = cb(a, b);
    return function sum(a, b) {
        return a + b;
    };
}
function sum(a, b) {
    return a + b;
}
function print(a, b) {
    console.log(a + b);
}
console.log(calculate(4, 5, sum));
