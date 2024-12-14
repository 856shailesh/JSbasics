//Input array is sorted

function binarySearch(arr, element) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (arr[mid] == element) {
            return mid;
        }
        else if (element > arr[mid]) {
            start = mid+1;
        } else if (element < arr[mid]) {
            end = mid - 1;
        }
    }
    return -1;
}

const arr = [12, 15, 18, 22, 28, 32, 45];
const element = 12;

const index = binarySearch(arr, element)
if (index == -1)
    console.log("Element not found")
else
    console.log("Element found at position : " + index)


