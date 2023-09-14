document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');
    const resultDiv = document.getElementById('result');

    const validCredentials = {
        username: "admin",
        password: "421$$"  
    };

    loginButton.addEventListener('click', function () {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === validCredentials.username) {
            if (password === validCredentials.password) {

                    resultDiv.textContent = "Welcome, login success!";
                
                resultDiv.style.color = "green";
            } else {
                resultDiv.textContent = "Incorrect password.";
                resultDiv.style.color = "red";
            }
        } 
        else if (password === validCredentials.password) 
        {
            resultDiv.textContent = "Incorrect username.";
            resultDiv.style.color = "red";
        } 
        else 
        {
            resultDiv.textContent = "Both username and password are incorrect.";
            resultDiv.style.color = "red";
        }
    });
});
