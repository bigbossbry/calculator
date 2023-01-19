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





