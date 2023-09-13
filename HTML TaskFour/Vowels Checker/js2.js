function countVowels(inputString)
{
    inputString = inputString.toLowerCase();

    let aCount = 0;
    let eCount = 0;
    let oCount = 0;
    let uCount = 0;
    let iCount = 0;

    for (let char of inputString) {
        switch (char) {
            case 'a':
                aCount++;
                break;
            case 'e':
                eCount++;
                break;
            case 'o':
                oCount++;
                break;
            case 'u':
                uCount++;
                break;
            case 'i':
                iCount++;
                break;
            default:
                break;
        }
    }

    alert(`a=${aCount} e=${eCount} o=${oCount} u=${uCount} i=${iCount}`);
}

function handleButtonClick()
{
    let userInput = prompt("Please enter a string:");

    if (userInput !== null) {
        countVowels(userInput);
    }
}
