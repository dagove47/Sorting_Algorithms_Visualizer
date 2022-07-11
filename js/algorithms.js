
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
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
        for (let j = i; 0 < j; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j-1], arr[j]];
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minVal = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minVal]) {
                minVal = j;
            }
        }
        [arr[i], arr[minVal]] = [arr[minVal], arr[i]];
    }
    return arr;
}

function quickSort(arr) {
    console.log('quickSort');
}

function mergeSort(arr) {
    console.log('mergeSort');
}

export { bubbleSort, insertionSort, selectionSort, quickSort, mergeSort };