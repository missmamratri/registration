// Get references to error display elements
var logerror = document.getElementById("loginerror");
var regerror = document.getElementById("regerror");

// Navigation between forms
function navigation() {
  document.getElementById("registrations").style.display = "block";
  document.getElementById("login").style.display = "none";
}

// Registration logic
function registration(event) {
  event.preventDefault();

  var rname = document.getElementById("regname").value;
  var email = document.getElementById("regemail").value;
  var rpass = document.getElementById("regpswd").value;
  var rconfpass = document.getElementById("regconfpswd").value;

  if (rname === "" || email === "" || rpass === "" || rconfpass === "") {
    regerror.innerHTML = "Please enter all the fields";
  } else if (rpass !== rconfpass) {
    regerror.innerHTML = "Your Password and Confirm Password do not match";
  } else {
    // Save data to sessionStorage
    sessionStorage.setItem("storedname", rname);
    sessionStorage.setItem("storedemail", email);
    sessionStorage.setItem("storedpass", rpass);

    alert("Registration successful!");

    // Switch back to login form
    document.getElementById("registrations").style.display = "none";
    document.getElementById("login").style.display = "block";
    regerror.innerHTML = ""; // Clear error
  }
}

// Login logic
function login(event) {
  event.preventDefault();

  var loginmail = document.getElementById("loginemail").value;
  var loginpsw = document.getElementById("loginpswd").value;

  var storedEmail = sessionStorage.getItem("storedemail");
  var storedPass = sessionStorage.getItem("storedpass");

  if (loginmail === "" || loginpsw === "") {
    logerror.innerHTML = "Enter email and password";
  } else if (loginmail === storedEmail && loginpsw === storedPass) {
    window.location.href = "second.html"; // Redirect to next page
  } else {
    logerror.innerHTML = "Invalid credentials";
  }
}

// Optional: Display welcome message on second.html
function welcome() {
  var welcome = document.getElementById("welcome");
  welcome.innerHTML = "Welcome " + sessionStorage.getItem("storedname") + "!";
}
