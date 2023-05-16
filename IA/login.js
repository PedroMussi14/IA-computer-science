let usernameElement = document.getElementById("username");
let passwordElement = document.getElementById("password");

document.querySelector("form").addEventListener("submit", function(e) {
    
    let username = usernameElement.value;
    let password = passwordElement.value;
    
    if (username == "" || password == "") {
        return alert("Please fill all the fields");
    }
    if (password.length < 8) { 
        return alert("Password must be at least 8 characters long");
    } else if (password.length > 20) {
        return alert("Password must be at most 20 characters long");
    }
    
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    
    document.querySelector("form").reset();
    window.location.href = "index.html";
});