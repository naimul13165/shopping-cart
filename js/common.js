function getTextElimentValueById(elimentId){
    const phoneTotalEliment = document.getElementById(elimentId)
    const phoneTotalString = phoneTotalEliment.innerText;
    const phoneTotalCurrent = parseInt(phoneTotalString);
    return phoneTotalCurrent;
}

function setElimentValueById(elimentId , value){
    const subTotalEliment = document.getElementById(elimentId)
    subTotalEliment.innerText = value;
}

function calculatorSunTotal(){
    const phoneTotalCurrent = getTextElimentValueById('phone-total');
    const caseTotalCurrent = getTextElimentValueById('case-total');
    const subTotalAmount = phoneTotalCurrent + caseTotalCurrent;
    setElimentValueById('sub-current', subTotalAmount)

    //calculatorTax
    const taxAomuntString = (subTotalAmount  * 0.1).toFixed(2);
    const taxAomunt = parseFloat(taxAomuntString);

    setElimentValueById('tex-amount', taxAomunt);

    const currentSubTotal = subTotalAmount + taxAomunt;
    setElimentValueById('final-amount' , currentSubTotal);
}