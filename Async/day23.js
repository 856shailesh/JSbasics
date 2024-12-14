const url = "https://reqres.in/api/users/2"
const res1 = fetch(url)
console.log(res1)
    
async function searchProduct() {
    const res = await fetch(url)
    console.log(res)
}
searchProduct()