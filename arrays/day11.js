/*
//Concat method
const arr1 = [1, 22, 23]
const arr2 = [2, 3, 44, 23]
const arr4 = [2,23,23,23]
//will not mutate the original array
//we can add mutate 2 or more array in one line also
const arr3 = arr1.concat(arr2).concat(arr4)
console.log(arr3) //will add all of them together


//Join Method : doesn't mutate the array
const guest = ["a", "b", "c", "d", "a"]
console.log(guest)
console.log(guest.join()) // place a comma in between by default
console.log(guest.join("  ")) // put a space in between we get String in output
const l1 = guest.join("|")
console.log(typeof(l1)) // Return type of join is String


//includes : Particular item present in the list or not
const guestlist = ["a", "b", "c"]
console.log(guestlist.includes("a")) //true , bcs present in list
console.log(guestlist.includes("dd"))//false , not present
console.log(guestlist.includes("a",1)) // start search after 1st element , so false


//indexOf & lastindexOf
const guestlist = ["a", "b", "c","a"]
console.log(guestlist.indexOf("b")) // return 1st index
console.log(guestlist.indexOf("a", 1)) // search after 1st index 
console.log(guestlist.lastIndexOf("a")) // search from end


//Push : Add to the end , top most (Mutate the array)
// Pop : Delete from end , top most (last added value) , return the value you deleted
const guestlist = ["a", "b", "c", "a"]
const removedItem = guestlist.pop() //removed a from the end
console.log(removedItem)
console.log(guestlist)
guestlist.push("e") // added e at the end
console.log(guestlist)


//Shift() : remove item from the begining
//Unshift() : add item at begining
const guestlist = ["a", "b", "c", "a"]
const removedItem = guestlist.shift() //remove from start
console.log(removedItem)
console.log(guestlist)
console.log(guestlist.unshift("e")) // return the length
console.log(guestlist) // e added at start


//ForEach Method
const transt = [23, 34, -21, 90, -32] //Transaction done on account , + added , - spent
// How to know if a transacation is positive or negative : for loop with if (as below)
for (const amt of transt) {
    if (amt > 0)
        console.log(`Amount credited of value ${amt}`)
    else
        console.log(`Amount debited of value ${amt}`)
}


//No need to do all of this
const transt = [23, 34, -21, 90, -32] 
function calc(amt) {
    if (amt > 0)
        console.log(`Amount credited of value ${amt}`)
    else
        console.log(`Amount debited of value ${amt}`)
}
//it's upto forEach method , when to call calc fn
*/
//transt.forEach((a) => calc(a)) //calc is a callback function
//or I can copy the whole calc fn inside the param of forEach
//or Same thing as anon function or Arrow Function 
// Anon Function

const transt = [23, 34, -21, 90, -32] 
//a = values = 23
//b = index pos = 0
//c = entire array = i.e transt
transt.forEach((a, b, c) => {
    if (a > 0)
        console.log(`Amount credited of value ${a} at index ${b} , original array is ${c}`)
    else
        console.log(`Amount debited of value ${a} at index ${b} , original array is ${c}`)
});