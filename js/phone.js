function updatePhoneNumber(isIncrease){
    const phoneNumberFiled = document.getElementById('phone-number-filed');
    const phoneNumberString = phoneNumberFiled.value;
    const previousPhoneNumber = parseInt(phoneNumberString);
    let newPhoneNumber;
    if(isIncrease){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberFiled.value = newPhoneNumber;
    return newPhoneNumber;
}


function updatePhoneTotalPrice(newPhoneNumber){
    const PhoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalEliment = document.getElementById('phone-total');
    phoneTotalEliment.innerText = PhoneTotalPrice; 
}



document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);

    calculatorSunTotal();
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);
    calculatorSunTotal();
})
