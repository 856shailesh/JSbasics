function searchItem(item , cb) {
    let itemID = item + 10;
    cb(itemID,makePayment)
}
function addtoCart(itemID , cb) {
    let cartId = itemID + 5;
    cb(cartId)
}

function makePayment(cartID) {
    console.log(`Payment made with ${cartID}`)
}
/*
const searchitemID = searchItem("iphone");
const cartID = addtoCart(searchitemID);
makePayment(cartID); 
Goal is to call only makePayment , eveything else run
*/

//makePayment(addtoCart(searchItem("Iphone")))
searchItem("iphone", addtoCart)