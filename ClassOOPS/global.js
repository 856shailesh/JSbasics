/*
a = 2;
console.log(a)

global.fetch("https://google.com").then((res) => console.log(res));
*/

a = 9;
function add() {
    console.log(this)
    console.log(this.a) //print only a
}
add() // will print global object