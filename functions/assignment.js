//assign a function to a variable , using declaration
const l1 = function sum(a,b){
    return a+b;
}
//anonoumous function
const l2 = function (a,b){
    return a+b;
}
//Arrow function
const l3 = (a,b) => {return a+b};

//consume the variable
console.log(l3(2,3))
console.log(l2(3,4))
console.log(l1(1,2))

//2. Pass a function as an argument
//2.1 Function declaration
function l4(a,b,fn){
    return fn(a,b);
}
function sum(a,b){
    return a+b;
}
console.log(l4(2,3,sum))
//2.2 Anonymous function
const sm = function (a,b,fn){
    return fn(a,b);
}
const s = function sm(a,b){ return a+b }
console.log(sum(34,31,sm))

//2.3 Arrow Function
const minus = (a,b,f)=> f(a,b);
const l5 = (a,b)=> a/b
console.log(minus(45,21,l5))

//3. Return function from a function , call the function 
//3.1 Function Declaration
function phone(){
    return function phoneModel(a){
        console.log(`Phone model is ${a}`);
    }
}

//3.2 Anon Function
function name(){
    return function (n){
        console.log(`Name is ${n}`)
    }
}

//3.3 Arrow Function
function lastName(){
    return (n) => console.log(`Last Name is ${n}`)
}
