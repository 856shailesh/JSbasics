//Bubble Sort : Largest element will come at end after each iteration
// Time Complexity : 2 for loops ; Big O n sqaure

function bubbleSort(arr) {
    let len = arr.length - 1;
    for (let i = 0; i < len; i++){ // this is for iteration
        for (let j = 0; j < len - i; j++){ // For inner comparison
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
const arr = [2,6,4,1,9,3];
console.log("Original Array:", arr);
bubbleSort(arr);
console.log("Sorted Array:",arr)