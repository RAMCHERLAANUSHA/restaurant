document.getElementById('number').addEventListener('input', function () {
    validation_number();
});
document.getElementById('quantity').addEventListener('input', function () {
    validation_quantity();
});

function validationForm(){
    validation_number();
    validation_quantity();
}
function validation_number(){
    var number = document.getElementById("number").value;
    let digitsonly = /^[0-9]/;
    let lettersOnly =/^[A-Za-z]+$/;
    if (number===""){
        return displayErrorMessage("number","*Phonenumber should not empty");
    }
    if (digitsonly.test(number)){
        return displayErrorMessage('number',"");
    }
    if (number.length<10){
        return displayErrorMessage("number","*Phonenumber must be 10 digits");
    }
    if (number.length>10){
        return displayErrorMessage("number","*Phonenumber must be 10 digits");
    }
    if (lettersOnly.test(number)){
        return displayErrorMessage("number","*Phonenumber should not be a string");
    }
    return displayErrorMessage('number','');
}
function validation_quantity(){
    var quantity = document.getElementById("quantity").value;
    let digitsonly = /^[0-9]/;
    let lettersOnly =/^[A-Za-z]+$/;
    if (quantity===""){
        return displayErrorMessage("quantity","*Quantity should not empty");
    }
    if (digitsonly.test(quantity)){
        return displayErrorMessage("quantity","");
    }
    if (lettersOnly.test(quantity)){
        return displayErrorMessage("quantity","*quantity should not be a string");
    }
    return displayErrorMessage('quantity','');
}

function displayErrorMessage(elementId, message) {  
    var errorContainer = document.createElement('p');
    var errorContainerId = elementId + '-error';
    var existingErrorContainer = document.getElementById(errorContainerId);
    if (existingErrorContainer) {
        existingErrorContainer.remove();
    }
    errorContainer.id = errorContainerId;
    errorContainer.classList.add("error-message")
    errorContainer.innerHTML = message;
    errorContainer.style.margin = 0;
    errorContainer.style.padding = 0;


    var parentDiv = document.getElementById(elementId).closest('.form-group');
    parentDiv.appendChild(errorContainer);
    if (message === ''){
        errorContainer.style.display = 'none';
    }
}