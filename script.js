const confirmBtn = document.querySelector('.confirmBtn');
const nameInput = document.getElementById('holderName');
const numInput = document.getElementById('cardNum');
const monthInput = document.getElementById('expired');
const yearInput = document.getElementById('expiredYear');
const cvcInput = document.getElementById('cvcText');
const errorMsg = document.querySelectorAll('.errorMessage');
const invalidInput = document.querySelector('.wrongFormat');
const formSidePage = document.querySelector('.formSide');
const thanksPage = document.querySelector('.thanksPage');
const cardNumbers = document.querySelector('.numbers');
const cardName = document.querySelector('.name');
const cardMonth = document.querySelector('.monthShort');
const cardYear = document.querySelector('.yearShort');
const cvcNum = document.querySelector('.cardBackNum');

function correct(){
    let nameInputValue = nameInput.value;
    let numInputValue = numInput.value;
    let monthInputValue = monthInput.value;
    let yearInputValue = yearInput.value;
    let cvcInputValue = cvcInput.value;

    for (let i = 0; i < errorMsg.length; i++) {
        if (nameInputValue == '') {
            errorMsg[0].classList.add('displayError');
            nameInput.classList.add('errorText');
        } else {
            nameInput.classList.remove('errorText');
            errorMsg[0].classList.remove('displayError');
            cardName.innerHTML = nameInputValue 
        };

        if (numInputValue == '') {
            errorMsg[1].classList.add('displayError');
            numInput.classList.add('errorText');
        } else if (isNaN(numInputValue)) {
            invalidInput.classList.add('displayError');
            numInput.classList.add('errorText');
            errorMsg[1].classList.remove('displayError');
        } else {
            errorMsg[1].classList.remove('displayError');
            numInput.classList.remove('errorText');
            invalidInput.classList.remove('displayError');
            cardNumbers.innerHTML = numInputValue;
        }

        if (monthInputValue == '') {
            errorMsg[2].classList.add('displayError');
            monthInput.classList.add('errorText');
        } else {
            monthInput.classList.remove('errorText');
            cardMonth.innerHTML = monthInputValue;
        }

        if (yearInputValue == '') {
            errorMsg[2].classList.add('displayError');
            yearInput.classList.add('errorText');
        } else {
            yearInput.classList.remove('errorText');
            cardYear.innerHTML = yearInputValue;
        }

        if (yearInputValue && monthInputValue) {
            errorMsg[2].classList.remove('displayError');
        }

        if (cvcInputValue == '') {
            errorMsg[3].classList.add('displayError')
            cvcInput.classList.add('errorText');
        } else {
            errorMsg[3].classList.remove('displayError')
            cvcInput.classList.remove('errorText');
            cvcNum.innerHTML = cvcInputValue;
        }

        if (nameInputValue && (!isNaN(numInputValue)) && cvcInputValue && yearInputValue && monthInputValue) {
            formSidePage.classList.add('view');
            thanksPage.classList.add('view');
        }
    }
}

confirmBtn.addEventListener('click', function(e){
    e.preventDefault();

    correct();
});