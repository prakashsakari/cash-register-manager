const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-btn");
const message = document.querySelector("#error-msg");
const numOfNotes = document.querySelectorAll(".num-of-notes")

const notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];


function validateCash() {
    hideMessage();
    if (billAmount.value > 0){
        if (cashGiven.value >= billAmount.value){
            const returnAmount = cashGiven.value - billAmount.value;
            calculateChange(returnAmount);
        }else{
            showMessage("Cash given must be greater than the bill amount");
        }
    }else{
        showMessage("Invalid Bill Amount");
    }
}


var billAmountFocus = document.addEventListener("keyup", function (e){
    var cashLabel = document.querySelector("#cash")
    cashLabel.style.display = "block"
    
    var cashInput = document.querySelector("#cash-given")
    cashInput.style.display = "block"
})

function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;
}

function calculateChange(returnAmount){
    for (let i=0; i < notes.length; i++){
        const numberOfNotes = Math.trunc(returnAmount / notes[i]);
        returnAmount %= notes[i];
        numOfNotes[i+1].innerText = numberOfNotes;
    }

}

checkButton.addEventListener("click", validateCash);