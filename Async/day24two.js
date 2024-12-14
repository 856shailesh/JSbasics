/*
const getCart = function () {
    return new Promise((resolved, rejected) => {
        if (Math.random() > 0.01) {
            setTimeout(() => {
                resolved({ cartID: 'c001' })
            }, 1000);
        } else {
            setTimeout(() => {
                rejected("Error")
            }, 1000);
        }
    })
}
getCart()
    .then((res) => { console.log(res) })
    .catch((res) => { console.log(res) })
    .finally((res)=>{ console.log("Finally executed") })
*/

const getCart =  function () {
    return new Promise((resolved, rejected) => {
        if (Math.random() > 0.01) {
            setTimeout(() => {
                resolved({ cartID: 'c001' })
            }, 1000);
        } else {
            setTimeout(() => {
                rejected("Error")
            }, 1000);
        }
    })
}
async function getOutput() {
    const res = await getCart();
    console.log(res) // print cartID
}