const registeredUsers = [];
const defaultUsername = "admin";
const defaultPassword = "123";
let messageTimeout;

function handleLogin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if the username and password match any registered user
  const user = registeredUsers.find(user => user.username === username && user.password === password);

  if (user) {
    showMessage('Welcome, ' + user.username + '!');
  } else if (username || password) {
    showMessage('Incorrect username or password. Please try again.');
  } else {
    showMessage('Please enter your credentials.');
  }
}

function handleRegister() {
  const newUsername = document.getElementById('newUsername').value;
  const newPassword = document.getElementById('newPassword').value;

  if (!newUsername || !newPassword) {
    showMessage('Please enter a username and password for registration.');
    return;
  }

  registeredUsers.push({ username: newUsername, password: newPassword });

  console.log('New user registered:', { newUsername, newPassword });
  showMessage('Registered successfully. Welcome!');
  hideRegisterForm();
  showLoginForm();
}

function showRegisterForm() {
  hideLoginForm();
  const registerForm = document.getElementById('register-form');
  registerForm.style.display = 'block';
}

function hideRegisterForm() {
  const registerForm = document.getElementById('register-form');
  registerForm.style.display = 'none';
}

function showLoginForm() {
  const loginForm = document.getElementById('login-form');
  loginForm.style.display = 'block';
}

function hideLoginForm() {
  const loginForm = document.getElementById('login-form');
  loginForm.style.display = 'none';
}

function showMessage(message) {
  const messageContainer = document.getElementById('message-container');
  messageContainer.innerHTML = message;

  // Clear previous timeout
  clearTimeout(messageTimeout);

  // Hide the message after 3 seconds
  messageTimeout = setTimeout(() => {
    messageContainer.innerHTML = '';
  }, 3000);
}
