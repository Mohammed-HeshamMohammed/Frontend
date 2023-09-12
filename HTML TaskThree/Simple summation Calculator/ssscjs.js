function calculateSum() {
    const firstNumber = parseFloat(document.getElementById("firstNumber").value);
    const secondNumber = parseFloat(document.getElementById("secondNumber").value);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert("Please enter valid numbers.");
        return;
    }

    const sum = firstNumber + secondNumber;
    const resultMessage = `${firstNumber} + ${secondNumber} = ${sum}`;
    document.getElementById("result").textContent = resultMessage;
}