
/*
for (let i = 0; i < a.length; i++){
    if (a[i] > 0) {
        console.log(`${a[i]} is positivie`)
    } else console.log (`${a[i]} is negative`)
} 
*/
/*
let amt = [0, 1, 2, -3, -4, 5,33];
amt.forEach((amt , index) => {
    if (amt > 0)
        console.log(` is credited ${index}`)
    else console.log(` is debited ${index}`)
}) 



const value = [1, 2, 3, 4, 5]
const output = value.map((value) => value * 5).filter((value) => value > 15)
console.log(output) */

const transt = [1,2, 3, 4, 5]

const balance = transt.reduce((pv, cv, index, arr) => {

    let sum = pv + cv;
    return sum;
}
)
console.log(balance)