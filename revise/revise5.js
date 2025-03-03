/*classic
for (let i = 0; i < 2; i++){
    const x = 9;
    console.log("Inside for loop " , x);
} 

let x = [3, 4, 5];
x.forEach((item, index) => {
    console.log(`Index of ${item} is ${index}`)
}) 

const c1 = () => {
    return (a, b) => a + b;
}
const f2 = c1();
console.log(f2(31, 14));


let c1 = [2, 3, 4, 5, 6];
let map1 = c1.map((a) => a * 2);
console.log(map1);
let filter1 = map1.filter((a) => (a % 4 == 0))
console.log(filter1)
let reduce1 = filter1.reduce((val, sum) => sum += val, 10)
console.log(reduce1);
*/

console.log("start");
setTimeout(() => {console.log("Async")}, 1); // API Queue > Call Back Queue > Call Stack
console.log("end");