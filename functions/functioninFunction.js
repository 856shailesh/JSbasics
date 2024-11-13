//assign a function to a variable
const result = function calculate1(a , b){
    
}
//pass one function as arugument into antoher fn
function calculate(a , b , fn){
    let res =  fn(a,b) // Invoking the function
    console.log("Output is : " + res)
}
const sum = (a,b) => {return a+b}
function minus(a,b){ return a-b }
function divide(a,b){ return a/b}
function mulitply (a,b){return a*b}

calculate (3,6,mulitply)