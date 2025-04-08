// Buena suerte!

//leftside
const cardNumber = document.querySelector("#card-number");
const cardUser = document.querySelector("#card-username");
const cardMonth = document.querySelector("#card-month");
const cardYear = document.querySelector("#card-year");
const cardCVC = document.querySelector("#card-cvc");

//rightside
const holderUser = document.querySelector("#holder-name");
const holderNumber = document.querySelector("#holder-card-number");
const holderMonth = document.querySelector("#exp-date");
const holderYear = document.querySelector("#mm-yy");
const holderCVC = document.querySelector("#cvc");
const form = document.querySelector("form");
const sectionSuccess = document.querySelector("#success-container");
const sectionForm = document.querySelector("#form-elements")

holderUser.addEventListener("change", function () {
    cardUser.textContent = this.value;
})

holderNumber.addEventListener("change", function () {
    cardNumber.textContent = this.value;
})

holderMonth.addEventListener("change", function () {
    cardMonth.textContent = this.value;
})

holderYear.addEventListener("change", function () {
    cardYear.textContent = this.value;
})

holderCVC.addEventListener("change", function () {
    cardCVC.textContent = this.value;
})

form.addEventListener("submit", function (e) {
    e.preventDefault();

    sectionSuccess.style.display = "flex";
    sectionForm.style.display = "none";
})