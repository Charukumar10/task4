
function saveName() {
    const name = document.getElementById("username").value;

    if (name.trim() === "") {
        alert("Please enter your name");
        return;
    }

    localStorage.setItem("username", name);

    displayName();
}

function displayName() {
    const savedName = localStorage.getItem("username");

    if (savedName) {
        document.getElementById("display").innerText =
            "Welcome, " + savedName;
    }
}

window.onload = displayName;
