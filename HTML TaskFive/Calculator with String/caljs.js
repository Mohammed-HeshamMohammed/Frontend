function calculate() 
{
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value.toLowerCase();
    let result;

    if (isNaN(num1) || isNaN(num2)) 
    {
        document.getElementById("result").textContent = "Please enter valid numbers";
        return;
    }

    switch (operation) 
    {
        case "summation":
            result = num1 + num2;
            break;
        case "multiplication":
            result = num1 * num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "division":
            if (num2 === 0) {
                document.getElementById("result").textContent = "Error: Division by zero is not allowed";
                return;
            }
            result = num1 / num2;
            break;
        default:
            document.getElementById("result").textContent = "Invalid operation. Please choose one of: summation, multiplication, subtract, or division";
            return;
    }

    document.getElementById("result").textContent = `Result: ${result}`;
}
