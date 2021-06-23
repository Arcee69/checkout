let countDE = document.querySelector('#display');
let countME = document.querySelector('.minus');
let countPE = document.querySelector('.plus');
let countSE = document.querySelector('#show');
let countSB = document.querySelector('.subtract');
let countAE = document.querySelector('.add');
let tag = document.querySelectorAll('input');

let count = 0;

// First Item Counter
function updateDisplay() {
    countDE.innerHTML = count;
}

updateDisplay();

countPE.addEventListener('click', () => {
    count++;
    updateDisplay();
});

countME.addEventListener('click', () => {
    count--;
    updateDisplay();
});

// Second Item Counter
function showDisplay() {
    countSE.innerHTML = count;
}

showDisplay();

countAE.addEventListener('click', () => {
    count++;
    showDisplay();
});

countSB.addEventListener('click', () => {
    count--;
    showDisplay();
});

function click() {
    if (tag === true) {
        alert('Verification Successful');
    } else {
        alert('Please complete the input form');
    }
}