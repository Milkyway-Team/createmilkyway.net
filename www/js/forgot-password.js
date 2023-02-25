function submitForm() {
    emailField = document.getElementById('form-email');
    email = emailField.value;

    fetch('http://localhost/forgot-password-data', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'email': email,
        }
    })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData.status);
      if (responseData.status == "success") {
        window.location.href = "http://localhost/login";
      }
    })
}