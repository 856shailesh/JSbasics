function searchItem (itemName,cb){
    console.log(`Searching item ${itemName}`)
    const itemID =  `ItemId : ${itemName}10 `
    cb(itemID, checkoutCart)
}
function addtoCart(itemID , cb){
    console.log(`Adding item with id ${itemID} to the cart`)
    const cartID = `cartId : ${itemID}`
    cb(cartID,makePayment)
}
function checkoutCart(cartID,cb) {
    console.log(`Making payment for Checkout id as ${cartID}`)
    const checkoutID =  `checkout Id : ${cartID}`
    cb(checkoutID)
}
function makePayment(checkoutID){
    console.log(`Making payment for checkout id as ${checkoutID}`)
    return `Payment ID generated is : ${checkoutID}`
}
//we are just calling one method , everything else is automatic
searchItem("Iphone",addtoCart) 