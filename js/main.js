const sizeInput = document.getElementById("sizeInput");
const speedInput = document.getElementById("speedInput");
const barsContainer = document.getElementById("barsContainer");

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
    for(let bar of barsArray) {
        let newBar = document.createElement("div");
        newBar.setAttribute("class", "bars");
        newBar.style.height = bar + "vh";
        barsContainer.append(newBar);
    }
}

function deleteBars() {
    barsArray.length = 0;
    barsContainer.textContent = '';
}

function sortTime() {
    delay = (30 - (speedInput.value - 1)) * 100;
    // document.querySelectorAll(".bars").forEach((bar) => {
    //     bar.style.transitionDuration = ((delay/1000)*0.7) + "s";
    // });
}

function reset() {
    deleteBars();
    newArray();
    createBars();
}

reset();