
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
    if (arr.length === 0) {
        return [];
    } else {
        const pivotValue = arr[0];
        let lesser = [];
        let equal = [];
        let greater = [];
        for (let e of arr) {
            if (e < pivotValue) {
                lesser.push(e);
            } else if (e > pivotValue) {
                greater.push(e);
            } else {
                equal.push(e);
            }
        }
        return [...quickSort(lesser), ...equal, ...quickSort(greater)];
    }
}

function merge(firstArr, secondArr) {
    const output = [];
    let firstInd = 0;
    let secondInd = 0;
    while (firstInd < firstArr.length && secondInd < secondArr.length) {
        const firstElem = firstArr[firstInd];
        const secondElem = secondArr[secondInd];
        if (firstElem < secondElem) {
            output.push(firstElem);
            firstInd++;
        } else {
            output.push(secondElem);
            secondInd++;
        }
    }
    return [...output, ...firstArr.slice(firstInd), ...secondArr.slice(secondInd)];
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const halfInd = Math.floor(arr.length / 2);
    const firstHalf = arr.slice(0, halfInd);
    const secondHalf = arr.slice(halfInd);
    return merge(
        mergeSort(firstHalf),
        mergeSort(secondHalf)
    );
}


export { bubbleSort, insertionSort, selectionSort, quickSort, mergeSort };