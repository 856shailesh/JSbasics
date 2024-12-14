/*
//common JS modules
let firstName = "Shailesh Kumar"
const marks = [1, 2, 5];
module.exports = function login() {
    console.log("Login to application")
}
exports.age = 80;
//export one or multipel items
//module.exports = { login, firstName , age };
*/
//ES Moduels
function login() {
    console.log("Print")
}
const marks = [24, 22]
export { login, marks }