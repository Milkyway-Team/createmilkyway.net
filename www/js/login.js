console.log("login.jsx loaded");

function submitForm() {
    emailField = document.getElementById('form-email');
    passwordField = document.getElementById('form-password');
    email = emailField.value;
    password = passwordField.value;

    //send GET request to server with email and password to /login-token
    //if successful, redirect to /dashboard
    //if not, display error message
    fetch('http://localhost/login-token', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'email': email,
            'password': password
        }
    })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData.status);
      if (responseData.status == "success") {
        console.log(responseData.token);
        setCookie("token", responseData.token, 1);
        setCookie("email", email, 1);
        window.location.href = "http://localhost/dashboard";
      }
    })
    console.log("Login data sent to server");
}


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

