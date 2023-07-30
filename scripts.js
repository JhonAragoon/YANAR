function simulateLogin() {
  var usernameInput = document.getElementById('username');
  var passwordInput = document.getElementById('password');
  var username = usernameInput.value;
  var password = passwordInput.value;

  // Simulación de verificación de credenciales
  if (username === 'usuario' && password === 'contraseña') {
    alert('Inicio de sesión exitoso.');
    // Redirigir al usuario a la página "inicio.html" después del inicio de sesión exitoso
    window.location.href = 'inicio.html';
  } else {
    alert('Usuario o contraseña incorrectos. Por favor, intenta nuevamente.');
  }
}

function simulateRegistration() {
  // Aquí podrías agregar la lógica para simular el registro de un nuevo usuario
  alert('Registro exitoso. Ahora puedes iniciar sesión.');
  // Luego del registro exitoso, podrías redirigir al usuario al formulario de inicio de sesión
  showLoginForm();
}

function showRegisterForm() {
  var loginForm = document.querySelector('.login-form');
  var registerForm = document.querySelector('.register-form');

  loginForm.style.display = 'none';
  registerForm.style.display = 'block';
}

function showLoginForm() {
  var loginForm = document.querySelector('.login-form');
  var registerForm = document.querySelector('.register-form');

  loginForm.style.display = 'block';
  registerForm.style.display = 'none';
}

function cerrarSesion() {
  // Simplemente redirige al usuario de vuelta a la página de inicio de sesión (index.html)
  window.location.href = 'index.html';
}

// Event listeners para los botones de inicio de sesión, registro y cerrar sesión
var loginButton = document.querySelector('#login-form button[type="button"]');
var registerButton = document.querySelector('.register-form button[type="button"]');
var logoutButton = document.querySelector('#logout-button');

if (loginButton) {
  loginButton.addEventListener('click', simulateLogin);
}

if (registerButton) {
  registerButton.addEventListener('click', simulateRegistration);
}

if (logoutButton) {
  logoutButton.addEventListener('click', cerrarSesion);
}
