const percentage = document.getElementById('percentage');
const tipPercentage = document.getElementById('tip-percentage');
const totalTip = document.getElementById('total-tip');
const tipForm = document.getElementById('tip-form');
const totalAmount = document.getElementById('total-bill');
const people = document.getElementById('people');
const numberOfPeople = document.getElementById('numberOfPeople');
const splitAmount = document.getElementById('split-amount');
const bill = document.getElementById('bill');


tipPercentage.innerHTML = percentage.value + '%';

numberOfPeople.innerHTML = people.value;


people.oninput = function() {
    numberOfPeople.innerHTML = this.value;
}
bill.onchange = function() {
    bill.value = this.value;
}

percentage.oninput = function() {
    tipPercentage.innerHTML = this.value + '%';
}

tipForm.onchange = function() {
    people.oninput = function() {
        numberOfPeople.innerHTML = this.value;
    }
    
    percentage.oninput = function() {
        tipPercentage.innerHTML = this.value + '%';
    }
    bill.onchange = function() {
        bill.value = this.value;
    }
    
    tip = (bill.value * (Number(percentage.value/100))).toFixed(2);
    totalTip.innerHTML = '$' + tip;
    total = (Number(bill.value) + Number(bill.value) * (Number(percentage.value/100))).toFixed(2);
    totalAmount.innerHTML = '$' + total;
    split = (total / people.value).toFixed(2);
    splitAmount.innerHTML =  '$' + split;
}



