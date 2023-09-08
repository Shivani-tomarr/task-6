document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginform");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

     
        const username = document.getElementById("Username").value;
        const password = document.getElementById("Password").value;

      
        if (username === "s" && password === "s") {
            window.location.href = "dashboard.html"; 
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });
});
