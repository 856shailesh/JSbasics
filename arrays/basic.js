/*
const arr = [0, 1, 2, 3, 4, 5];
console.log(arr) //whole array
console.log(arr[0]) //first element i.e 0
console.log(arr[10]) //OOB element : Undefined
console.log(arr[-1]) // Negative , Undefined
console.log(arr.at(-1)) // At() ,traverse from end for -ve

//Mutability : Arrays are also immutable means ,
//Any action u perform on arrays , you have to catch it in new one
//Doesn't affect the original array.
const arr = ["Shailesh", "Kumar", "lakhman"]

//but but but , there are some methods which mutate the original array
const arr = [0,1,2,3,4,5,6]
const arr1 = arr.slice(2, 4) //slice , doesn't mutate the original array
console.log(arr1)

// mutate the array 
const arr2 = arr.splice(4) //start array , no of elements
console.log(arr)
console.log(arr2)
*/

const arr = [0, 1, 2, 3, 4, 5]
arr.reverse() //mutate the array
console.log(arr)