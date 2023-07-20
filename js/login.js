// step-1 add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // step-2 get the email address inside the input field
    //always remember to use. value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    //step-3 get password
    const passwordFiled = document.getElementById('user-password');
    const password = passwordFiled.value;

    //step-4 danger way
    if (email === 'sajalsm86@gmail.com' && password === 'sajal4321') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Tui password vule gesos vi sothik password de');
    }
});

