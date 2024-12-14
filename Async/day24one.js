/*
const getCartID = function () {
    return new Promise((resolved, rejected) => {
        if (Math.random() > 0.5) {
                resolved({ cartID: "C_100" })
        } else {
                rejected("error occured")
            }
        }
    )}
const res = getCartID()
console.log(res)
*/

const url = "https://reqres.in/api/users/2";
fetch(url)
    .then((res) => console.log(res))
    .catch((res) => { console.log(res) })
    .finally(()=> {"Operation completed"})