
function bubbleSort(arr) {
    for (let i = 0; i < arr.length -1 ; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr [j -1]) {
                [arr[j], arr[j -1]] = [arr[j -1], arr[j]];
            }
        }
    }
}

function selectionSort(arr) {
    console.log('selectionSort');
}

function mergeSort(arr) {
    console.log('mergeSort');
}

function quickSort(arr) {
    console.log('quickSort');
}

export { bubbleSort, insertionSort, selectionSort, mergeSort, quickSort };