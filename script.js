// script.js

const display = document.getElementById('display');

// Function to append values to the display
function appendValue(value) {
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

// Function to clear the display
function clearDisplay() {
    display.innerText = '0';
}

// Function to calculate the result
function calculate() {
    try {
        display.innerText = eval(display.innerText.replace('÷', '/').replace('×', '*'));
    } catch (error) {
        display.innerText = 'Error';
    }
}
