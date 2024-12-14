/*
const cust = ["aa", "gd", "sk","ab"]
//console.log(cust)
cust.sort((a, b) => {
    //Comparing the ASCII value , if gd  > aa line 6 and switch
    if (a <= b) return 1; // if +ve , maintain the order
    else return -1; //switch the values
}) 
console.log(cust)
*/

const trans = [3, 23, -2, 24, 1]
/*trans.sort() // this will not work bcs -ve ASCII is big 
//also 23 will come before 3 
trans.sort((a, b) => {
    if (a >= b) return 1;
    else return -1; // For Ascending order
}) */
trans.sort((a, b) => a - b); //Ascending , same as return a-b
//this will return a number , if +ve or 0 do nothing otherwisw swap
trans.sort((a, b) => b - a); //Descending
console.log(trans)