document.addEventListener("DOMContentLoaded", function() {

    let registerForm = document.getElementById("registerForm");

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value;
        let mobile = document.getElementById("mobile").value.trim();

        let user = {
            name: name,
            email: email,
            password: password,
            mobile: mobile
        };

        localStorage.setItem("user", JSON.stringify(user));

        alert("Registration Successful!");

        window.location.href = "./Login.html";

    });

});