function calculate (a,b,fn){ //sum as a function is getting passed here
    return fn(a,b)
}
const sum = function (a,b){ // this is getting called form Line 2
    return a+b;
}
const result = calculate(2,3,sum);
console.log(result)