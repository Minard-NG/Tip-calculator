//filtering of user data in bill input
let billInput = document.getElementById('bill');
let errorBill = document.getElementById('error-bill');
let bill;

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
                errorBill.innerText = "Can't be zero";
                billInput.style.outline = '2px solid red';
                errorBill.style.opacity = '1';
            }

        } else {
            errorBill.innerText = "Must be a number";
            billInput.style.outline = '2px solid red';
            errorBill.style.opacity = '1';
        }

    } else {
        errorBill.innerText = "Can't be empty";
        billInput.style.outline = '2px solid red';
        errorBill.style.opacity = '1';
    }

});

//filtering user input in no
let noInput = document.getElementById('no');
let errorNo = document.getElementById('error-no'),
    noOfPeople;

noInput.addEventListener('input', () => {
    if (noInput.value !== '') {
        let response = filter(noInput.value);

        if (response.isNum) {

            if (response.value !== 0) {
                errorNo.style.opacity = '0';
                noInput.style.outline = '2px solid #26c0ab';
                noOfPeople = response.value;
            } else {
                errorNo.innerText = "Can't be zero";
                noInput.style.outline = '2px solid red';
                errorNo.style.opacity = '1';
            }

        } else {
            errorNo.innerText = "Must be a number";
            noInput.style.outline = '2px solid red';
            errorNo.style.opacity = '1';
        }

    } else {
        errorNo.innerText = "Can't be empty";
        noInput.style.outline = '2px solid red';
        errorNo.style.opacity = '1';
    }

});


//filter utility function
function filter(val) {
    let value = +val;
    let isNum = !Number.isNaN(value);

    return {
        value,
        isNum
    }
}


function calculate() {

}