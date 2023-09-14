// script.js
document.addEventListener('DOMContentLoaded', function () {
    const guessButton = document.getElementById('guessButton');
    const guessInput = document.getElementById('guessInput');
    const result = document.getElementById('result');
    const message = document.getElementById('message');
    const gif = document.getElementById('gif'); // i used gif for my ammusment , plus i like to make things fun thats all 

    // Generate a random number between 0 and 9
    const randomNumber = Math.floor(Math.random() * 10);

    guessButton.addEventListener('click', function () {
        const userGuess = parseInt(guessInput.value, 10);

        if (isNaN(userGuess) || userGuess < 0 || userGuess > 9) {
            message.textContent = 'Please enter a valid number between 0 and 9.';
            message.style.color = 'red';
        } else if (userGuess === randomNumber) {
            message.textContent = 'You guessed the correct number!';
            message.style.color = 'green';
            gif.src = '../Guess Game/img/correctly-correctly-guessed.gif'; // Replace 'correct.gif' with the correct GIF URL
            result.style.display = 'block'; // Show the result
        } else {
            message.textContent = 'You guessed an incorrect number.';
            message.style.color = 'red';
            gif.src = '../Guess Game/img/gif-shinobi-you-are-wrong.gif'; // Replace 'incorrect.gif' with the incorrect GIF URL
            result.style.display = 'block'; // Show the result
        }
    });
});
