
let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    let user = JSON.parse(localStorage.getItem("user"));

    if (user === null) {

        document.getElementById("message").innerText =
            "Please register first!";

    } 
    else if (user.email === email && user.password === password) {

        alert("Login Successful! Welcome " + user.name);

        localStorage.setItem("isLoggedIn", "true");

        window.location.href = "../Home/Home.html";

    } 
    else {

        document.getElementById("message").innerText =
            "Invalid Email or Password!";

    }

});
