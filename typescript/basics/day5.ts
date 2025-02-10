//custom data type
type stringorNumber = string | number;
let firstName: stringorNumber = "2"; // same concept below
type function2input = (a: number, b: number) => number;


function calculate(a: number, b: number, cb : function2input) {
    const c1 = cb(a, b);
    return function sum(a:number, b:number) {
        return a + b;
    }
}
function sum(a: number, b: number) : number {
    return a + b;
}
function print(a: number, b: number) {
    console.log(a + b);
}
console.log(calculate(4,5,sum))