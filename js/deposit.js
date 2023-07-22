/* //step-1
document.getElementById('deposit-btn').addEventListener('click', function () {

    //step-2
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    //step-3
    depositField.value = '';
    //problem fix
    if (isNaN(newDepositAmount)) {
        alert('Please Provide a valid Number');
        return;
    }
    //step-4
    const depositElement = document.getElementById('deposit-element');
    const previousDepositString = depositElement.innerText;
    const previousDeposit = parseFloat(previousDepositString);
    //step-5
    const currentTotalDeposit = previousDeposit + newDepositAmount;
    depositElement.innerText = currentTotalDeposit;
    //step-6
    const balanceElement = document.getElementById('balance-element');
    const previousBalancetString = balanceElement.innerText;
    const previousBalance = parseFloat(previousBalancetString);
    //step-7
    const remaingBlance = previousBalance + newDepositAmount;
    balanceElement.innerText = remaingBlance;
}); */

