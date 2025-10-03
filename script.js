var loginmail,loginpsw,rname,rpass,rconfpass,email;
var logerror=document.querySelector(".error");
var regerror=document.querySelector("#regerror");
var welcome=document.getElementById("welcome");

function navigation()
{
	var a=document.getElementById("registrations");
	a.style.display="block";
	var logi=document.getElementById("login");
	logi.style.display="none";
}



function registration()
{
	rname=document.getElementById("regname").value;
	email=document.getElementById("regemail").value;
	rpass=document.getElementById("regpswd").value;
	rconfpass=document.getElementById("regconfpswd").value;
	if (rname=="" || email=="" || rpass=="" || rconfpass=="")
	{
		regerror.innerHTML="Please enter all the fields";
	}
	else if (rpass != rconfpass)
	{
		regerror.innerHTML="Your Password and Your Confirm Password not matching";
	}
	else
	{
		sessionStorage.setItem('storedname', rname);
		sessionStorage.setItem("storedemail", email);
		sessionStorage.setItem("storedpass", rpass);

		alert("Registration successfull");
		var a=document.getElementById("registrations");
		a.style.display="none";
		var logi=document.getElementById("login");
		logi.style.display="block";
	}

	event.preventDefault();
}

function login()
{
	loginmail=document.getElementById("loginemail").value;
	loginpsw=document.getElementById("loginpswd").value;
	if (loginmail=="" || loginpsw=="")
	{
		logerror.innerHTML="Enter email and password";
	}
	//else if (loginmail==email && loginpsw==rpass)
	else if (loginmail===sessionStorage.getItem("storedemail") && loginpsw===sessionStorage.getItem("storedpass"))
	{
		window.location.href = "second.html";
	}
	else
	{
		logerror.innerHTML="Please Register";
	}
	event.preventDefault();
}

function showWelcome() {
  var welcomeElement = document.getElementById("welcome");
  if (!welcomeElement) {
    console.error("Element with id 'welcome' not found.");
    return;
  }

  var name = sessionStorage.getItem("storedname") || "Guest";
  var email = sessionStorage.getItem("storedemail") || "N/A";
  var pass = sessionStorage.getItem("storedpass") || "N/A";

  welcomeElement.innerHTML =
    "Hi " + name + "!<br>" +
    "Your email: " + email + "<br>" +
    "Your password: " + pass;
}
