import { bubbleSort, insertionSort, selectionSort, mergeSort, quickSort } from './algorithms.js';

const sizeInput = document.getElementById("sizeInput");
const speedInput = document.getElementById("speedInput");
const resetBtn = document.getElementById('resetBtn');
const barsContainer = document.getElementById("barsContainer");
const bubbleBtn = document.getElementById('bubbleBtn');
const insertionBtn = document.getElementById('insertionBtn');
const selectionBtn = document.getElementById('selectionBtn');
const mergeBtn = document.getElementById('mergeBtn');
const quickBtn = document.getElementById('quickBtn');

let barsArray = [];
let delay = 0;

function newArray() {
    let size = sizeInput.value;
    while(size > 0) {
        let randomNum = Math.floor((Math.random() * (60 - 2) ) + 2);
        barsArray.push(randomNum);
        size--;
    }
}

function createBars() {
    barsContainer.textContent = '';
    for(let bar of barsArray) {
        let newBar = document.createElement("div");
        newBar.setAttribute("class", "bars");
        newBar.style.height = bar + "vh";
        barsContainer.append(newBar);
    }
}

function sortTime() {
    delay = (30 - (speedInput.value - 1)) * 100;
    // document.querySelectorAll(".bars").forEach((bar) => {
    //     bar.style.transitionDuration = ((delay/1000)*0.7) + "s";
    // });
}

function reset() {
    barsArray.length = 0;
    newArray();
    createBars();
}

sizeInput.addEventListener('change', () => {
    reset();
})

speedInput.addEventListener('change', () => {
    
})

resetBtn.addEventListener('click', () => {
    reset();
})

bubbleBtn.addEventListener('click', () => {
    bubbleSort(barsArray);
    createBars();
})

insertionBtn.addEventListener('click', () => {
    insertionSort(barsArray);
    createBars();
})

selectionBtn.addEventListener('click', () => {
    selectionSort(barsArray);
    createBars();
})

quickBtn.addEventListener('click', () => {
    quickSort(barsArray);
    createBars();
})

mergeBtn.addEventListener('click', () => {
    mergeSort(barsArray);
    createBars();
})

reset();