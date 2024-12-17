const original = [2, 3, 4, 6]
console.log(`Original array ${original}`)
const doubled = original.map(a => a * 2)
console.log("map method ", doubled)
console.log("filter method ", doubled.filter(a => a % 3 == 0))
const sum = original.reduce((cv, sum) => sum += cv, 0)
console.log("Reduce method sum ", sum)
// all in one
const all = original.map(a => a * 2) //Double
    .filter(a => a % 3 == 0) // Only 6 & 12
    .reduce((cv, sum) => sum += cv, 0) //Sum is 18
console.log(all)
