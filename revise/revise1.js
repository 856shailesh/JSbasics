/*
console.log("Start");
setTimeout(() => {
    console.log("Async Wait of 1 miliSec")
}, 1);

console.log(fetch("https://reqres.in/api/users/2").then(res => res.json).then(data => {}));

console.log("End");

const url = "https://reqres.in/api/users/2"
console.log("Start");

async function searchProduct(){
    const res = await fetch(url);
    console.log(res)
}
searchProduct();
console.log("End")



const url = "https://reqres.in/api/users/2"
console.log("Start");
const c = fetch(url).then(res => {
    console.log(res)
    res.json();
}).then(data => {
    console.log(data.body)
})

console.log("end")

const url = "https://reqres.in/api/users/2"
console.log("Start");
async function f() {
    const res = await fetch(url);
    console.log(res)
}
f();
console.log("End");

const url = "https://reqress.in/api/users/2"
console.log("Start");
fetch(url).then((res) => console.log("Pass" , res))
.catch((res)=> console.log("Fail " , res) )



const myPromise = new Promise((resolved, rejected) => {
        if (Math.random() > 0.5) {
            resolved("Resolved")
        } else {
            rejected("Error")
        }
    })
const res = pr()
console.log(res) */

const mySalary = require("./revise3.js")