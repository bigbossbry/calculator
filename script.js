const btnsContainer = document.querySelector('.btns-container');

for (let i = 0; i<20; i++) {
    const buttons = document.createElement('div');
    buttons.classList.add('calc-button');
    buttons.classList.add(`btn-${i+1}`);
    btnsContainer.appendChild(buttons);
    
}