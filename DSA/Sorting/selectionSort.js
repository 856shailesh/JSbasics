//Selection sort : Push smallest array to left
// 2 for loops , O n sqaure
function selectionSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i; j < len; j++) {
            if (arr[j] < arr[min]) {
                let temp = arr[j];
                arr[j] = arr[min];
                arr[min] = temp;
            }
        }
    }
}
const arr = [2,6,4,1,9,3];
console.log("Original Array:", arr);
selectionSort(arr);
console.log("Sorted Array:",arr)