function updateCaseNumber(isIncrease){
    const caseNumberFlied = document.getElementById('case-number-filed');  
    const caseNumberSting = caseNumberFlied.value;
    const previousCaseNumber = parseInt(caseNumberSting);

    let newCaseNumber;
    if(isIncrease){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberFlied.value = newCaseNumber;
    return newCaseNumber;
}

// 
function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalEliment = document.getElementById('case-total');
    caseTotalEliment.innerText = caseTotalPrice;
}


document.getElementById('btn-case-plus').addEventListener('click' , function(){
    const newCaseNumber = updateCaseNumber(true);
   updateCaseTotalPrice(newCaseNumber);
   calculatorSunTotal();

})
// 
document.getElementById('btn-case-minus').addEventListener('click' , function(){
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber );
    calculatorSunTotal();
})