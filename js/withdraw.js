//withdraw 
//step-1
document.getElementById('withdraw-btn').addEventListener('click', function () {
    ///step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmoutString = withdrawField.value;
    const newWithdrawAmout = parseFloat(newWithdrawAmoutString);
    //step-7
    withdrawField.value = '';

    //problem fix
    if (isNaN(newWithdrawAmout)) {
        alert('Please Provide a valid Number');
        return;
    };

    //step-3
    const withdrawElement = document.getElementById('withdraw-element');
    const previouWithdrawString = withdrawElement.innerText;
    const previousWithdraw = parseFloat(previouWithdrawString);


    //decrcase withdraw from total balance
    //step-5
    const balanceElement = document.getElementById('balance-element');
    const previousBalancetString = balanceElement.innerText;
    const previousBalance = parseFloat(previousBalancetString);



    //problem fix
    if (newWithdrawAmout > previousBalance) {
        alert("You don't have Enough Balance");
        return;
    }

    //step-4
    const currentTotalWithdraw = previousWithdraw + newWithdrawAmout;
    withdrawElement.innerText = currentTotalWithdraw;

    //step-6
    const totalBlance = previousBalance - newWithdrawAmout;
    balanceElement.innerText = totalBlance;

});
