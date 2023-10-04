function validateLogIn() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var error = document.getElementById("error");
  var text = "";

  if (email === "" || password === "") {
    text = "*All fields are required.";
    error.innerHTML = text;
    return false;
  }
  if (email.indexOf("@") == -1) {
    text = "*Email should include @";
    error.innerHTML = text;
    return false;
  }

  if (password.length < 8) {
    text = "*Password is too short";
    error.innerHTML = text;
    return false;
  }
}
