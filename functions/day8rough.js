function calculate(a,b,fn){
    console.log("First line")
    fn(a,b)
    console.log("Second line")
}
function sum(a,b){
    console.log("Sum is getting called")
    return a+b;
}
calculate(2,3,sum)
