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
