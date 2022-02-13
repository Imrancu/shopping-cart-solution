function updateProductCounter(product, price, isIncrease) {
    const productInput = document.getElementById(product + '-counter');
    let productCounter = productInput.value;
    if (isIncrease == true) {
        productCounter = parseInt(productCounter) + 1;
    } else if (productCounter > 0) {
        productCounter = parseInt(productCounter) - 1;
    }
    productInput.value = productCounter;
    // update total price
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerHTML = productCounter * price;

    // Calculate Total
    calculateTotal()
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-counter');
    const productCounter = parseInt(productInput.value);
    return productCounter;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1278;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update subtotal on html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}

// Phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function() {
    updateProductCounter('phone', 1219, true)
})
document.getElementById('phone-minus').addEventListener('click', function() {
    updateProductCounter('phone', 1219, false)
})


// Handle case increae decrease events
document.getElementById('case-plus').addEventListener('click', function() {
    updateProductCounter('case', 59, true)
})

document.getElementById('case-minus').addEventListener('click', function() {
    updateProductCounter('case', 59, false)
})