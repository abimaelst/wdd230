const passwordField = document.querySelector("#password");
const passwordFieldConfirmation = document.querySelector("#password_confirm");
const message = document.querySelector("#password_message");

console.log("testing", passwordField);

passwordField.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
  if (passwordField.value !== passwordFieldConfirmation.value) {
    message.textContent = "❗Password DO NOT MATCH!";
    message.style.visibility = "show";
    passwordFieldConfirmation.style.backgroundColor = "#fff0f3";
    passwordFieldConfirmation.value = "";
    passwordFieldConfirmation.focus();
  } else {
    message.style.display = "none";
    passwordFieldConfirmation.style.backgroundColor = "#fff";
    passwordFieldConfirmation.style.color = "#000";
  }
}
