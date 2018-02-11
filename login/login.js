document.getElementById('form-button').addEventListener('click', function(e) {
  e.preventDefault();
  var email = document.getElementById('input-email').value === 'pam@isthebest.com';
  var password = document.getElementById('input-password').value === 'puppiesandshit';
  authorizeLogin(email, password);
});

function authorizeLogin(email, password) {
  if (email && password) {
    window.location = './success.html'
  } else {
    document.getElementById("login-error").innerHTML = "Oops! Typo? Try again.";
    clearInputs();
  }
}

function clearInputs() {
  document.getElementById("input-email").value = "";
  document.getElementById("input-password").value = "";
}
