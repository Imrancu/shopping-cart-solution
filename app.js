function updateCounter(isIncrease) {
    const caseInput = document.getElementById('case-counter');
    let caseCounter = caseInput.value;
    if (isIncrease == true) {
        caseCounter = parseInt(caseCounter) + 1;
    } else if (caseCounter > 0) {
        caseCounter = parseInt(caseCounter) - 1;
    }
    caseInput.value = caseCounter;
    // update total price
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerHTML = caseCounter * 59;
}


// document.getElementById('case-plus').addEventListener('click', function() {
//     updateCounter(true)
// })

// document.getElementById('case-minus').addEventListener('click', function() {
//     updateCounter(false)
// })