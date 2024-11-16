//different ways of creating Strings
/*
const myName1 = 'Shailesh';
const myName2 = `Shailesh`;
const myName3 = new String ("Shailesh Kumar")

//length is a property (variable in String class)
console.log(myName.length); //8
//at is a method (function)
console.log(myName.at(0))
console.log(myName.charAt(3));//older version of at

console.log(myName.charCodeAt(0)) //83 , Ascii value of S
console.log(myName.codePointAt(0)) //83 , ASCII value of S
//Difference between , charCodeAt gives your UTF 8 , 2nd one give your UTF 16

//Emojis can also be entered , win + dot

//concatenation , plus operator
let l1 = 'Shailesh'
let l2 = 'Kumar'
let fullName = l1 + l2
console.log(fullName) //ShaileshKumar
console.log(l1.concat(l2)) //concat operator , ShaileshKumar
//concat doesn't change the original string as Strings are immutable
//if need to add , we should specifify like
let l3 = l1.concat(l2) // ShaileshKumar


//Searching Operation
const myName = "My name is Shailesh";
let exist = myName.includes("name");
let exist1 = myName.startsWith("My ")
let exist2 = myName.endsWith("esh") 
console.log(exist) //true
console.log(`Start with ${exist1}`) //true
console.log(`Ends with ${exist2}`) //true

//Getting Index Position based on Substring
let myName4 = "I love my India love of love"
console.log(`output is: ${myName4.indexOf("love")}`) //2 , search start form 0 index
console.log(`output is: ${myName4.lastIndexOf("love")}`) //24 , search from back
console.log(`output is: ${myName4.indexOf("love", 8)}`) //16 , search start after 8th index
*/


//common operations
let c1 = "I love my India"
console.log(c1.toLowerCase()) // lower case
console.log(c1.toUpperCase()) // Upper case
let c2 = "Shailesh    "
let c3 = "    kumar   "
console.log(c2.trimEnd().concat(c3.trim()))
console.log(c2.repeat(100)) // repeat 100 times
console.log(c1.replace("my", "our")) //replace once
console.log(c1.replaceAll("my", "our")) //replace all


let statement = "My name is Shailesh Kumar , name name"
console.log(statement.length)
console.log(statement.substring(1, 36)) // 0 based , incluced , excluded 
console.log(statement.substring(8)) // trim from particular index included
