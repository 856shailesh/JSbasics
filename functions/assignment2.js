/*1 Assign a funciton to a variable 
1.1 Function Declaration , Anon Function , Arrow Function
2.  Pass a function as an argument to another function
3. Return a function from a function
*/

const l1 = function sum(a, b) {
    return a+b 
}
console.log(l1(2, 3))

const l2 = function (a, b) {
    return a+b
}
console.log(l2(3, 3))
const l3 = (a, b) => { return a + b }
console.log(l3(4, 4))

//2. Pass a function as an argument to another function

function sum1(a, b , fn) {
    return fn(a,b)
}
function internalSum(a, b) {
    return a+b
}
const l5 = sum1(2, 31, internalSum)
console.log(l5)

//2.2 Using Anon Function
const c1 = function (a, b, fn) {
    return fn(a,b)
}
const c2 = function (a, b) {
    return a-b
}
const c3 = c1(334, 22, c2)
console.log(c3)

//2.3 Using Arrow function
const j1 = (a, b, fn) => { return fn(a, b) }
const j2 = (a, b) => { return a * b }
const j3 = j1(2, 23, j2)
console.log(j3)

//3. Return function from a function
//3.1 Using function declaration
function power() {
    return function po(a, b) {
        return a ** b;
    }
}
const r2 = power()
const r3 = r2(2, 5);
console.log(r3)
