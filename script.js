const password = document.getElementById("password");
const confirmedPassword = document.getElementById("confirm-password");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

function CheckPasswordMatch() {
  if (password.value != confirmedPassword.value) {
    confirmedPassword.setCustomValidity("The passwords don't match!");
  } else {
    confirmedPassword.setCustomValidity("");
  }
}

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("You must use a valid email");
  } else {
    email.setCustomValidity("");
  }
});

phone.addEventListener("input", (event) => {
  if (phone.validity.typeMismatch) {
    phone.setCustomValidity(
      "Your number must be only digits and at least 8 digits"
    );
  } else {
    phone.setCustomValidity("");
  }
});

password.addEventListener("input", (event) => {
  if (password.validity.tooShort) {
    password.setCustomValidity("Your password must be at least 8 characters");
  } else {
    password.setCustomValidity("");
  }
});

password.addEventListener("input", CheckPasswordMatch);
confirmedPassword.addEventListener("input", CheckPasswordMatch);
