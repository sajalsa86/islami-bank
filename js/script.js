//deposit
document.getElementById('deposit-btn').addEventListener('click', function () {

    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    const depositElement = document.getElementById('deposit-element');
    const previousDepositString = depositElement.innerText;
    const previousDeposit = parseFloat(previousDepositString);

    const currentTotalDeposit = previousDeposit + newDepositAmount;
    depositElement.innerText = currentTotalDeposit;

    // added Total balance
    const balanceElement = document.getElementById('balance-element');
    const previousBalancetString = balanceElement.innerText;
    const previousBalance = parseFloat(previousBalancetString);

    //sum total deposit and total balance
    const totalBlance = previousBalance + newDepositAmount;
    balanceElement.innerText = totalBlance;

    depositField.value = '';
});

