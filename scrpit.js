function login() {
    let name = document.getElementById("name").value;

    if (name === "") {
        alert("Please enter your name");
        return;
    }

    document.getElementById("loginDiv").style.display = "none";
    document.getElementById("dashboardDiv").style.display = "block";
    document.getElementById("userName").innerText = name;
}

function markAttendance() {
    let name = document.getElementById("userName").innerText;
    let date = new Date().toLocaleDateString();

    document.getElementById("message").innerText =
        name + " marked present on " + date ;
}