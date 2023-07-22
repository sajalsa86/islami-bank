
//step-1
document.getElementById('withdraw-btn').addEventListener('click', function () {
    //step-2
    const newWithdrawAmout = getUserInputFieldById('withdraw-field');
    //problem fix
    if (isNaN(newWithdrawAmout)) {
        alert('Please Provide a valid Number');
        return;
    };
    //step-3
    const previousWithdraw = getTextElementValueByID('withdraw-element');

    //step-5
    const previousBalance = getTextElementValueByID('balance-element');
    //problem fix
    if (newWithdrawAmout > previousBalance) {
        alert("You don't have enough Balance");
        return;
    }
    //step-4
    const currentTotalWithdraw = previousWithdraw + newWithdrawAmout;
    setTextElementValueById('withdraw-element', currentTotalWithdraw);

    //step-6
    const remaingBlance = previousBalance - newWithdrawAmout;
    setTextElementValueById('balance-element', remaingBlance);
});