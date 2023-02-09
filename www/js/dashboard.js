if (getCookie("token") != "" && getCookie("email") != "") {
    fetch('http://localhost/check-token', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'email': getCookie("email"),
        'token': getCookie('token')
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.valid == true) {
            console.log("valid")
        } else {
            console.log("not valid")
            window.location.href = "http://localhost/login";
        }
    })
    .catch((error) => {});
} else {
    window.location.href = "http://localhost/login";
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

function logout() {
    setCookie("token", "", -1)
    window.location.href = "/login";
}