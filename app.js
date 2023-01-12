const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const errorMessage = document.querySelector("#error-message")
const availableNotes = [2000, 500, 100, 20, 10, 5, 1]
const noOfNotes = document.querySelectorAll(".no-of-notes")

const checkButton = document.querySelector("#check-button");

function showMessage(message) {
    errorMessage.style.display = "block";
    errorMessage.innerText = message;
};

function calculateChange(amountToBeReturned){
    for(let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i])
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes

    }
};

function validateBillAndCashAmount() {
    errorMessage.style.display ="none";

    if (billAmount.value < 0) {
        showMessage("Bill amount cannot be negative")
     } else if (cashGiven.value < 0) {
        showMessage("Cash cannot be negative")
     }
    else if(billAmount.value >= 0) {
        if(Number(billAmount.value) <= Number(cashGiven.value)) {
            const amountToBeReturned = Number(cashGiven.value) - Number(billAmount.value)
            calculateChange(amountToBeReturned);
        } else {
            showMessage("Cash cannot be less than the bill")
        }
       
     }
     
}

checkButton.addEventListener("click", validateBillAndCashAmount)

