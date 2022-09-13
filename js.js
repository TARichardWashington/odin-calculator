let operand1 = null;
let operator = 1;
let display = 0;

function add(operand1, operand2) {
    return parseInt(operand1) + parseInt(operand2);
}

function subtract(operand1, operand2) {
    return operand1 - operand2;
}

function multiply(operand1, operand2) {
    return operand1 * operand2;
}

function divide(operand1, operand2) {
    return (operand1 / operand2).toFixed(2);
}

function operate(operand1, operand2, operator) {
    console.log('Operating...' + operand1 + ' ' + operator + ' ' + operand2);

    if(operator === '+') {
        return add(operand1, operand2);
    } else if (operator === '-') {
        return subtract(operand1, operand2);
    } else if (operator === '/') {
        return divide(operand1, operand2);
    } else if(operator === '*') {
        return multiply(operand1, operand2);
    } else {
        return false;
    }
}

let equals = document.querySelector('#equals');

equals.addEventListener('click', function() {
    if(operand1 !== null && operator !== null && display != 0) {
    console.log('Calculating ' + operand1 + ' ' + operator + ' ' + display);    

    displayContent = operate(operand1, display, operator);
    display = displayContent;
    addNumberToDisplay(displayContent);
    }
});

let workingDisplay = document.querySelector('#display');

function addNumberToDisplay(number) {
    console.log('Updating display');
    workingDisplay.textContent = number;
}

let numbers = document.querySelectorAll('.number');

numbers.forEach(button => button.addEventListener('click', function(e) {
    console.log('Number ' +  this.textContent + ' clicked');

    if(display == 0 && this.textContent == 0) {
        console.log('here bu ');
    }
    else if(display === 0) {
        display = this.textContent;
    } else {
        display = display + this.textContent; 
    }

    console.log('operator '+ operator);

    addNumberToDisplay(display);
}));

let clear = document.querySelector('#clear');

clear.addEventListener('click', function() {
    console.log('Clear clicked');

    display = 0;
    operator = null;
    addNumberToDisplay(display);
});

let operators = document.querySelectorAll('.operator');

operators.forEach(button => button.addEventListener('click', function() {
    console.log('Operator ' + this.textContent + ' clicked');

    operator = this.textContent;
    operand1 = display;

    console.log('Operand1 set to ' + operand1);
    console.log('Operator set to ' + operator);

    display = 0;
}));

