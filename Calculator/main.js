const displayValue = document.querySelector('.screen')


const buttons = document.querySelectorAll('button');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal-sign');
const allClear = document.querySelector('.all-clear');
let displayedNum = displayValue.textContent;
displayedNum = 0;


buttons.forEach(button => button.addEventListener('click', (e) => {
        const key = e.target;
        const keyContent = key.value;
        let displayedNum = displayValue.textContent;
            // if (displayedNum.length > 8) {
            //     ;
            // }
            if (displayedNum == '0') {
                displayValue.textContent = keyContent;
            } else {
                displayValue.textContent = displayedNum + keyContent;
            } if (keyContent === '.') {
                displayValue.textContent = displayedNum + '.';
            // } if (keyContent === '-' || keyContent === '+' || keyContent === '/' || keyContent === '*') {
            //     button.classList.toggle('active'); 
            } if (keyContent === 'all-clear') {
                displayValue.textContent  = '';
            }
            
}));

equal.addEventListener('click', function() {
    let displayedNum = displayValue.textContent;
    let value = eval(displayedNum);
    displayValue.textContent = value;
    
});

