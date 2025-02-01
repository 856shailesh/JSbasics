/*
let a = [2, 3, 4, 5];

let ans1 = a.map(a => a * 3).filter(a => a % 2 == 0);
console.log(ans1);
let ans2 = ans1.reduce((a, sum) => sum += a, 0);
console.log(ans2)
*/

function waitSync(milliseconds) {
    const start = Date.now();
    console.log("waiting")
  while (Date.now() - start < milliseconds) {
    
  }
}

console.log("Start");
waitSync(5000); // Blocks for 2 seconds
console.log("End")