//step-1
document.getElementById('withdraw-btn').addEventListener('click', function () {
    //step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = withdrawField.value;
    const newWithdrawAmout = parseFloat(newWithdrawString);
    //step-3
    withdrawField.value = '';
    //problem fix
    if (isNaN(newWithdrawAmout)) {
        alert('Please Provide a valid number');
        return;
    };
    //step-4
    const withdrawElement = document.getElementById('withdraw-element');
    const previouWithdrawString = withdrawElement.innerText;
    const previousWithdraw = parseFloat(previouWithdrawString);
    //step-6
    const balanceElement = document.getElementById('balance-element');
    const previousBalancetString = balanceElement.innerText;
    const previousBalance = parseFloat(previousBalancetString);
    //problem fix
    if (newWithdrawAmout > previousBalance) {
        alert("You don't have Enough Balance");
        return;
    }
    //step-5
    const currentTotalWithdraw = previousWithdraw + newWithdrawAmout;
    withdrawElement.innerText = currentTotalWithdraw;
    //step-7
    const remaingBlance = previousBalance - newWithdrawAmout;
    balanceElement.innerText = remaingBlance;
});