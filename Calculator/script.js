let displayValue = "0";

function updateDisplay() {
    const display = document.getElementById("display");
    display.textContent = displayValue;
}

function appendToDisplay(val) {
    if (displayValue === "0") {
        displayValue = val;
    } else {
        displayValue += val;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = "0";
    updateDisplay();
}

function deleteCharacter() {
    if (displayValue.length > 1) {
        displayValue = displayValue.slice(0, -1);
    } else {
        displayValue = "0";
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (displayValue[displayValue.length - 1].match(/[+\-*/]/)) {
        deleteCharacter();
    }
    appendToDisplay(operator);
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
        updateDisplay();
    } catch (error) {
        displayValue = "Error";
        updateDisplay();
    }
}

updateDisplay();
