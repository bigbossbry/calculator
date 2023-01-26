// bukas ituloy yung % button functionality naman, afterwards, i-try yung CSS/JS effects naman such as hover, press, etc.

// Note: yung basic  calculator algorithm (Canon LS-88HI III) ang function niya is Last Screen Value + (Operator) + Current Screen Value.
const btnsContainer = document.querySelector('.btns-container');
const arr1 = ['+', '-', '*', '/'];
const arr2 = ['0', '.', '='];
const arr3 = ['AC', 'C', '+/-', '%'];

for (let i = 0; i<20; i++) {
    const calcBtn = document.createElement('button');
    calcBtn.classList.add('calc-button');
    calcBtn.classList.add(`btn-${i}`);
    btnsContainer.appendChild(calcBtn);
    if (i>=0 && i <=3) calcBtn.textContent = `${arr3[i]}`;
    if (i>=4 && i <=6) calcBtn.textContent = `${i+3}`;
    if (i>=8 && i <=10) calcBtn.textContent = `${i-4}`;
    if (i>=12 && i <=14) calcBtn.textContent = `${i-11}`;
    if (i>=16 && i <=18) calcBtn.textContent = `${arr2[i-16]}`;
    if (i==7) calcBtn.textContent = `${arr1[3]}`;
    if (i==11) calcBtn.textContent = `${arr1[2]}`;
    if (i==15) calcBtn.textContent = `${arr1[1]}`;
    if (i==19) calcBtn.textContent = `${arr1[0]}`;
    calcBtn.dataset.value = calcBtn.textContent;
}

let firstNum = null;
let secondNum = null;
let operator = null;

let operandToggler = 1;

// can also be the evaluate fn
function operate (first, second, third) {
    switch(third) {
        case '+': 
            let sum = Number(first) + Number(second);
            return sum;

        case '-':
            let difference = Number(first) - Number(second);
            return difference;

        case '*':
            let product = Number(first) * Number(second);
            return product;

        case '/':
            if(second !==0) { 
                let quotient = Number(first) / Number(second);
                return quotient;
            }
            screen.textContent = 'You cannot divide by 0!';
            return;

        default:
            return;
    }
} // call this using '=' button, parameters are firstNum, secondNum, operator


function callEval () {
    if (operator == null) {return;}
    if (operator == '/' && secondNum == null || secondNum == 0 || secondNum == '') {
        screen.textContent = "Error!";
        return;
    }
    let value = operate(firstNum, secondNum, operator);
    screen.textContent = value;
    firstNum = `${value}`;
    secondNum = null;
    operator = null;
}
const eval = document.querySelector('.btn-18');
eval.addEventListener('mousedown', callEval);

function assignOperator(event) {
    if (operator !== null) {callEval();}
    operator = event.target.dataset.value;
    operandToggler = 2;
}

const clearAll = document.querySelector('.btn-0');

function allClear() {
    firstNum = null;
    secondNum = null;
    operator = null;
    operandToggler = 1;
    screen.textContent = Number(firstNum);
}
clearAll.addEventListener('mousedown', allClear);


function backSpace () {
    if (operandToggler == 1) {
        if (firstNum == null || firstNum.length < 1) {return;}
        if (firstNum.length == 1) {firstNum = '00';}
        firstNum = firstNum.slice(0,-1);
        screen.textContent = firstNum;
    } else if (operandToggler == 2) {
        if (secondNum.length < 1 || secondNum == null) {return;}
        if (secondNum.length == 1) {secondNum = '00';}
        secondNum = secondNum.slice(0,-1);
        screen.textContent = secondNum;
    }
}

const sign = document.querySelector('.btn-2');
function toggleSign () {
    if (operandToggler == 1) {
        firstNum = `${Number(firstNum) * -1}`;
        screen.textContent = firstNum;
    } else if (operandToggler == 2) {
        secondNum = `${Number(secondNum) * -1}`;
        screen.textContent = secondNum;
    }
}
sign.addEventListener('mousedown', toggleSign);

const cDelete = document.querySelector('.btn-1');
cDelete.addEventListener('mousedown', backSpace);

const screen = document.querySelector('.calc-screen');
screen.textContent = Number(firstNum);

const calcBtns = document.querySelectorAll('.calc-button');
//CSS [attribute^=value];

function appendNum (event) {
    if (operandToggler == 1) {
    if (firstNum === null) {
        if (event.target.dataset.value === '0') {return;}
        firstNum = event.target.dataset.value;
    } 
    else if (firstNum.length <= 9) {
        if (firstNum == '0') {
            firstNum = event.target.dataset.value;
            screen.textContent = firstNum;
            return;
        }
        firstNum += event.target.dataset.value;
    } 
    screen.textContent = firstNum;
} else if (operandToggler == 2) {
    if (secondNum === null) {
        if (event.target.dataset.value === '0') {return;}
        secondNum = event.target.dataset.value;
    } 
    else if (secondNum.length <= 9) {
        secondNum += event.target.dataset.value;
    } 
    screen.textContent = secondNum;
}
}


function appendPoint () {
    if (firstNum === null || firstNum === 0) {firstNum = '0';}
    if (firstNum.includes('.')) {return;}
    firstNum += '.';
    screen.textContent = firstNum;
}
//Currently figuring out how to remove 0 sa first digit, but reflect the 1.0 sa decimal
//Parang best way is make a method to find if there's a decimal point in any position sa characters, tapos do while loop

function listenClick (button) {
    if(button.dataset.value >= 0 && button.dataset.value <= 9) {button.addEventListener('mousedown', appendNum);}
    if(button.dataset.value == '+' || button.dataset.value == '-' || button.dataset.value == '*' || button.dataset.value == '/') {button.addEventListener('mousedown', assignOperator);}
    if(button.dataset.value == '.') {button.addEventListener('mousedown', appendPoint);}
    //if(for C, +/-, and decimal)
    //if(for AC)
    //if(% and =, kung kaya sila pagsamahin sa isang function)
}

calcBtns.forEach(listenClick);


// dapat pag pindot ng '=' button, yung value ma-assign sa firstNum;


//Sa approach na ginagawa ko, I feel like the best next step is to assign numbers dun sa firstNum and secondNum variables using keypresses. Second is get operator using keypress, and then give results. Best basis natin is si michalosman calculator. very nice yung rendering niya. Siguro let's start with grouping the buttons according to functions.
// Buttons 0-9, decimal point, and '+/-' will be used to update either first and second number.
// operator buttons include +, -, *, /, =
// AC is all clear or reset, C is backspace
// % is a special operator that will operate using the secondNum as a percentage of the first num