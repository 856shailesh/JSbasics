function searchItem (itemName){
    console.log(`Searching item ${itemName}`)
    return `ItemId : ${itemName}10 `
}
function addtoCart(itemID){
    console.log(`Adding item with id ${itemID} to the cart`)
    return `cartId : ${itemID}`
}
function checkoutCart(cartID) {
    console.log(`Making payment for Checkout id as ${cartID}`)
    return `checkout Id : ${cartID}`
}
function makePayment(checkoutID){
    console.log(`Making payment for checkout id as ${checkoutID}`)
    return `Payment ID generated is : ${checkoutID}`
}

const itemID = searchItem(`iPhone`)
const cartID = addtoCart(itemID)
const checkoutID = checkoutCart(cartID)
const paymentID = makePayment(checkoutID)