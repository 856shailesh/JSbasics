/*
const nums = [1, 2, 3, 4]
// for Each loop : will not return anything
const mulitple = nums.forEach(
    (a) => {
        console.log(a * 5);  //5,10,15,20
    }
)
//Verify that we didn't receve anything
//even if you return from line5
console.log(mulitple) //return undefined

//Use map in place of forEach , see the magic
const mapMulitple = nums.map((a) => {
    return a * 5;  //5,10,15,20
    }
)
console.log(mapMulitple)

//filter : filter on returned values of map
//only put values that pass the creiteria
const trans = [-10, 23, 34, -2]
const l1 = trans.filter(
    (val) => {
        if (val > 0) return true
        else return false
    }
)
console.log(l1) // only positive values
*/
//reduce : finally return a single value not array (like filter)
//sum of all the nums
const trans = [1, 2, 3, 4, 5]
const balance = trans.reduce(
    (pv, cv, index, arr) => {
        console.log(`pv is ${pv} cv is ${cv} index is ${index} array is ${arr}`)
        let sum = pv + cv;
        return sum;
    } , 10 //initial Value
)
console.log(balance) //return 15
