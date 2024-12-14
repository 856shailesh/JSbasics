let num1 = 78 //Number
let num2 = "78" //String

//loose compariosn , JS will convert datatype
if (num1 == num2) { //it will do automatic conversion (Coersion)
    console.log("Equal")
} else console.log("Not Equal")

if (num1 === num2) {
    console.log("Equal")
} else console.log("Not Equal")