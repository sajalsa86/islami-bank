
function getUserInputFieldById(inputID) {
    const userInputField = document.getElementById(inputID);
    const newUserInputValueString = userInputField.value;
    const newUserInputValue = parseFloat(newUserInputValueString);

    userInputField.value = '';
    return newUserInputValue;

};

function getTextElementValueByID(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);

    return textElementValue;
};

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
};

