
const arr = [2, 3, 1, 55, 23]

function search(arr, val) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === val)
            return i;
    }
    return -1;
}
let index = search(arr, 23)
console.log(`Element found at position : ${index}`)
