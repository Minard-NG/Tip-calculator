let bill = 0, tip = 0, noOfPeople = 0, tipAmt = 0.00, totalPerPerson = 0.00;

//filtering of user data in bill input
let billInput = document.getElementById('bill');
let errorBill = document.getElementById('error-bill');


billInput.addEventListener('input', () => {
    if (billInput.value !== '') {
        let response = filter(billInput.value);

        if (response.isNum) {

            if (response.value !== 0) {
                errorBill.style.opacity = '0';
                billInput.style.outline = '2px solid #26c0ab';
                bill = response.value;
                console.log(bill)
            } else {
                bill = 0;
                errorBill.innerText = "Can't be zero";
                billInput.style.outline = '2px solid red';
                errorBill.style.opacity = '1';
            }

        } else {
            bill = 0;
            errorBill.innerText = "Must be a number";
            billInput.style.outline = '2px solid red';
            errorBill.style.opacity = '1';
        }

    } else {
        bill = 0;
        errorBill.innerText = "Can't be empty";
        billInput.style.outline = '2px solid red';
        errorBill.style.opacity = '1';
    }

    initializeCalculate()

});

//filtering user input in no
let noInput = document.getElementById('no');
let errorNo = document.getElementById('error-no');

noInput.addEventListener('input', () => {
    if (noInput.value !== '') {
        let response = filter(noInput.value);

        if (response.isNum) {

            if (response.value !== 0) {
                errorNo.style.opacity = '0';
                noInput.style.outline = '2px solid #26c0ab';
                noOfPeople = response.value;
            } else {
                noOfPeople = 0;
                errorNo.innerText = "Can't be zero";
                noInput.style.outline = '2px solid red';
                errorNo.style.opacity = '1';
            }

        } else {
            noOfPeople = 0;
            errorNo.innerText = "Must be a number";
            noInput.style.outline = '2px solid red';
            errorNo.style.opacity = '1';
        }

    } else {
        noOfPeople = 0;
        errorNo.innerText = "Can't be empty";
        noInput.style.outline = '2px solid red';
        errorNo.style.opacity = '1';
    }

    initializeCalculate()

});

//giving the select a tip section a radio button effect
let inputs = document.querySelectorAll('input[type="button"');
let customInput = document.getElementById('customTip');
let errorTip = document.getElementById('error-tip');


inputs.forEach((input) => {
    input.addEventListener('click', (evt) => {
        resetTipSection('button');
        tip = parseInt(input.value);
        input.style.backgroundColor = '#26c0ab';
        input.style.color = "#00494d";

        initializeCalculate()

    });
});

customInput.addEventListener('input', (evt) => {
    let tmp = customInput.value;

    if (customInput.value !== '') {
        let response = filter(customInput.value);

        if (response.isNum) {

            if (response.value !== 0) {
                errorTip.style.opacity = '0';
                customInput.style.outline = '2px solid #26c0ab';
                tip = response.value;
            } else {
                tip = 0;
                errorTip.innerText = "Can't be zero";
                customInput.style.outline = '2px solid red';
                errorTip.style.opacity = '1';
            }

        } else {
            tip = 0;
            errorTip.innerText = "Must be a number";
            customInput.style.outline = '2px solid red';
            errorTip.style.opacity = '1';
        }

    } else {
        tip = 0;
        errorTip.innerText = "Can't be empty";
        customInput.style.outline = '2px solid red';
        errorTip.style.opacity = '1';
    }
    resetTipSection('text');
    initializeCalculate()

});

function resetTipSection(btn) {
    if (btn === "button") {
        customInput.value = '';
        errorTip.style.opacity = '0';
        customInput.style.outline = 'none';
        tip = 0;
    }

    inputs.forEach((input) => {
        input.style.backgroundColor = '#00494d';
        input.style.color = "white";
    });
}


//filter utility function
function filter(val) {
    let value = +val;
    let isNum = !Number.isNaN(value);

    return {
        value,
        isNum
    }
}

let tipAmount = document.getElementById('tipAmount');
let total = document.getElementById("total");
let resetBtn = document.getElementById('resetBtn');

function initializeCalculate() {
    if (tip !== 0 && bill !== 0 && noOfPeople !== 0) {
        calculate();
    } else {
        total.innerText = "$0.00";
        tipAmount.innerText = "$0.00";
        resetBtn.disabled = true;
    }
}

function calculate() {
    tipAmt = parseFloat((tip * bill) / (noOfPeople * 100)).toFixed(2);
    tipAmount.innerText = '$' + tipAmt;

    totalPerPerson = parseFloat(bill / noOfPeople) + parseFloat(tipAmt);
    totalPerPerson = parseFloat(totalPerPerson).toFixed(2);
    total.innerText = '$' + totalPerPerson;

    resetBtn.disabled = false;
}

//handling reset button
resetBtn.addEventListener('click', (evt) => {
    tip = 0; bill = 0; noOfPeople = 0;
    billInput.style.outline = 'none';
    billInput.value = '';
    errorBill.style.opacity = '0'

    resetTipSection('button');

    noInput.style.outline = 'none';
    noInput.value = '';
    errorNo.style.opacity = '0';

    total.innerText = "$0.00";
    tipAmount.innerText = "$0.00";

    resetBtn.disabled =  true;
});