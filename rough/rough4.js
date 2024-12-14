/**

function f1(a, b, fn) {
    return fn(a,b)
}
function sum(a, b){
    return a + b;
}

console.log(f1(2, 3, sum)) // this sum is a callback function
*/

function itemID(item , cb) {
    const itemID = item + 10;
    cb(itemID, checkoutPage);
}
function addtoCart(itemID , cb) {
    const cartID = itemID + 8;
    cb(cartID, paymentPage)
}
function checkoutPage(cartID , cb) {
    const checkoutID = cartID + 6;
    cb(checkoutID)
}
function paymentPage(checkoutID) {
    console.log(`Payment made with ${checkoutID}`) 
}

itemID("iphone", addtoCart)

const first = "Shialehs"
first.concat("Kumar")
console.log(first)


