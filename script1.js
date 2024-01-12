const validEmail = "user@example.com";
const validPassword = "password123";

function login() {
    const enteredEmail = document.getElementById("email").value;
    const enteredPassword = document.getElementById("password").value;

    if (enteredEmail === validEmail && enteredPassword === validPassword) {
        window.location.href = "Profile.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
}
