//Function Expression 
//a) Anonymous function
const sum = function (a , b){
    let c = a+b;
    console.log (`Sum is ` + c )
}
//sum(4,5)
const sum2 = sum;
sum2(3,4) //we can name them anything