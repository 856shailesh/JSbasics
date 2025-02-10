/** 
Javascript : it's a language designed for web developement inititally but now it's used for all kind of nasty things.
1995 : js was born , brendan eich
97 : ecma script was there to standardize
2005 : Ajax async js and xml
2009 : Node js
2015 : ES6

data type : primitve : Number , boolean ,  null , undefined , string , big int , symbol
Object : Array , functions , map
Coersion : automatic conversion of one data type to another
NaN : not a number
default false values in boolean : zero , empty string , underfined , Nan
Undefined : by choice , it's a datatype
Not defined : Reference error , access something that is not defined.

var : redeclare and reassing : Global
let : only reassing , wihtin bracket
const : no redeclare and no reassing , within bracket

 

let a = "tue"
let c = Boolean(a)


let a = "23"
if (a == 23) console.log("true for double")
if (a === 23) console.log("true for tripel")
    else console.log("This is false")

Function : Function declaration and function expression (anon and arrow function)
Callback functions
*/

const f1 = (a, b) => {
    return function sum(a, b) {
        console.log(a+b)
    }
}

const c1 = f1()
c1(54,45)

