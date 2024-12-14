/*
const { rejects } = require("assert");
const { resolve } = require("path");

const req = fetch("https://reqres.in/api/users/2");
console.log(req)
*/

console.log("Begin")
function addAsyncBehaviour() {
    return new Promise((resolve) => {
        if (false) {
            resolve("Test"); // Data
        }
    })
}
console.log(addAsyncBehaviour())
console.log("End");