function displayWelcomeMessage()
{
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const birthYear = document.getElementById("birthYear").value;

    // Check if any of the required fields are empty
    if (firstName === '' || lastName === '' || birthYear === '') {
        alert("Please fill in all required fields.");
        return; // Exit the function if any field is empty
    }

    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    const welcomeMessage = `Welcome ${firstName} ${lastName}, you are ${age} years old.`;
    document.getElementById("welcomeMessage").textContent = welcomeMessage;}