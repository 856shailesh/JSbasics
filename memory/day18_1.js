/*
{
    var b = 20
    let a = 10
    console.log(a)
    console.log(b)
}
console.log(b)
console.log(a) */

//var a = 10 , print all 3
//let a = 10 , print all 3
//const a = 10 , print all 3
function f1() {
    //a = 10; //Implicit Global
    //global.a = 100 //Explicit Global
    //var a = 10 // Function Scope , error in 3rd one
    //let a = 10 , error in 3rd
    //const a = 10 , error in 3rd
    console.log(`Function scope: ${a}`);
    if ("a" === "a") {
        //let a = 10 , only if block
        //const a = 10 , only if block
        console.log(`block scope ${a}`)
    }
}
f1()
console.log(`Global Scope ${a}`)
