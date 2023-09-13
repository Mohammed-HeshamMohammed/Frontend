
while (true) {
    let userInput = prompt("Please enter your age:");

    if (userInput === null || userInput === "") {
        break;
    }

    let age = parseFloat(userInput);

    if (!isNaN(age) && age > 0) {
        let status;

        if (age >= 1 && age <= 10) {
            status = "Child";
        } else if (age >= 11 && age <= 18) {
            status = "Teenager";
        } else if (age >= 19 && age <= 50) {
            status = "Grown up";
        } else {
            status = "Old";
        }

        alert("Your status is: " + status);
    } else {
        alert("Please enter a valid positive number for your age.");
    }
}


/*       more advanced and simple for me



document.getElementById("clickButton").addEventListener("click", function () {

    document.getElementById("output").innerHTML = "Button Clicked!";

});

*/