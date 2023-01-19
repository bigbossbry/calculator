const btnsContainer = document.querySelector('.btns-container');
const arr1 = ['+', '-', '*', '/'];
const arr2 = ['0', '.', '='];
const arr3 = ['AC', 'C', '+/-', '%'];

for (let i = 0; i<20; i++) {
    const calcBtn = document.createElement('button');
    calcBtn.classList.add('calc-button');
    calcBtn.classList.add(`btn-${i}`);
    btnsContainer.appendChild(calcBtn);
    if (i>=0 && i <=3) {calcBtn.textContent = `${arr3[i]}`;}
    if (i>=4 && i <=6) {calcBtn.textContent = `${i+3}`;}
    if (i>=8 && i <=10) {calcBtn.textContent = `${i-4}`;}
    if (i>=12 && i <=14) {calcBtn.textContent = `${i-11}`;}
    if (i>=16 && i <=18) {calcBtn.textContent = `${arr2[i-16]}`;}
    if (i==7) {calcBtn.textContent = `${arr1[3]}`;}
    if (i==11) {calcBtn.textContent = `${arr1[2]}`;}
    if (i==15) {calcBtn.textContent = `${arr1[1]}`;}
    if (i==19) {calcBtn.textContent = `${arr1[0]}`;}
}

let firstNum = 0;
let secondNum = null;
let operator = null;

function addition(firstNum, secondNum) {
    return firstNum + secondNum;
}

function subtraction(firstNum, secondNum) {
    return firstNum - secondNum;
}

function multiplication(firstNum, secondNum) {
    return firstNum * secondNum;
}

function division(firstNum, secondNum) {
    return firstNum / secondNum;
}

function assignOperator(operator) {

}

//Sa approach na ginagawa ko, I feel like the best next step is to assign numbers dun sa firstNum and secondNum variables using keypresses. Second is get operator using keypress, and then give results. Best basis natin is si michalosman calculator. very nice yung rendering niya. Siguro let's start with grouping the buttons according to functions.
// Buttons 0-9, decimal point, and '+/-' will be used to update either first and second number.
// operator buttons include +, -, *, /, =
// AC is all clear or reset, C is backspace
// % is a special operator that will operate using the secondNum as a percentage of the first num