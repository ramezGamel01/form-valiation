function validateSignUp() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var error = document.getElementById("error");
  var text = "";

  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    text = "*All fields are required.";
    error.innerHTML = text;
    return false; // Prevent form submission
  } else if (firstName.length < 3) {
    text = "*Name is too short";
    error.innerHTML = text;
    return false;
  } else if (lastName.length < 3) {
    text = "*Name is too short";
    error.innerHTML = text;
    return false;
  }
  else if (password.length < 8) {
    text = "*Password should be atleast 8 characters";
    error.innerHTML = text;
    return false;
  } else if (password !== confirmPassword) {
    text = "*Password aren't matching";
    error.innerHTML = text;
    return false;
  }
  // Additional validation checks can be added here

  return true; // Allow form submission
}
