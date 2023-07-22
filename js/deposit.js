
//step-1
document.getElementById('deposit-btn').addEventListener('click', function () {
    //step-2
    const newDepositAmount = getUserInputFieldById('deposit-field');
    //problem fix
    if (isNaN(newDepositAmount)) {
        alert('Please Provide a valid Number');
        return;
    };
    //step-3
    const previousDeposit = getTextElementValueByID('deposit-element');
    //step-4
    const currentTotalDeposit = previousDeposit + newDepositAmount;
    setTextElementValueById('deposit-element', currentTotalDeposit);
    //step-5
    const previousBalance = getTextElementValueByID('balance-element');
    //step-6
    const remaingBlance = previousBalance + newDepositAmount;
    setTextElementValueById('balance-element', remaingBlance);
});