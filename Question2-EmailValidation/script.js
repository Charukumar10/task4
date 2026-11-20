
function validateEmail() {

    const email = document.getElementById("email").value;

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const message = document.getElementById("message");

    if (pattern.test(email)) {
        message.innerText = "Valid Email Address!";
        message.style.color = "green";
    } else {
        message.innerText = "Invalid Email Address!";
        message.style.color = "red";
    }

    return false;
}
