let displayValue = document.querySelector('.currentScreen');

let previousValue = document.querySelector('.previousScreen');
const buttons = document.querySelectorAll('button');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal-sign');
const allClear = document.querySelector('.all-clear');
const decimal = document.querySelector('.decimal');
let evalStringArray = [];
displayValue.textContent = 0;
previousValue.textContent = 0;

numbers.forEach(number => number.addEventListener('click', updateDisplay, false));

operators.forEach(operator => operator.addEventListener('click', performOperation, false));

allClear.addEventListener('click', function() {
    displayValue.textContent = '0';
    previousValue.textContent = '0';
});

decimal.addEventListener('click', function() {
    if (!displayValue.textContent.includes('.')) {
        displayValue.textContent += '.';
    }
});


function updateDisplay(clickObj) {
    let btnText = clickObj.target.value;
    if (displayValue.textContent === '0') {
        displayValue.textContent = '';
    }
    displayValue.textContent += btnText;
};

function performOperation(clickObj) { // For all the operators actions taken are the same therefore switch is not needed
    previousValue.textContent = displayValue.textContent;
    displayValue.textContent = '0';
    evalStringArray.push(previousValue.textContent);
    evalStringArray.push(clickObj.target.value);
}

equal.addEventListener('click', function() {
    const length = evalStringArray.length - 1;

    console.log(evalStringArray);

    for (i = length ; i >= 0; i--) {
        const previous = Number(previousValue.textContent), // Storing the data so that just for a shorter name
              current  = Number(displayValue.textContent);

        let result; // Placeholder

        switch (evalStringArray[i]) {
          case '-':
            result = previous - current;
            break;
          case '+':
            result = previous + current;
            break;
          case '*':
            result = previous * current;
            break;
          case '/':
            result = previous / current;
            break;
          default:

        }

        if(result)  // Update the display if the result is not "undefined" which will occur inevitably
          displayValue.textContent = result;
    }

    evalStringArray = []; // Empties array
});
