document.addEventListener("DOMContentLoaded",function(){
    const loginForm = document.getElementById("loginForm");
    const loadDummyBtn = document.getElementById("loadDummyData");
    const messageDiv = document.getElementById("message");

    function showMessage(msg, color = "red") {
        messageDiv.style.color = color;
        messageDiv.innerText = msg;
    }
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(u => u.email === email);
        if (!user) {
            showMessage("User not found.");
            return;
        }
        
        if (password.length < 6) {
            showMessage("Password must be at least 6 characters long.");
            return;
            
        }

        if (user.password !== password) {
            showMessage("Invalid password.");
            return;
        }
        
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        // showMessage("Login successful!");
        window.location.href = "dashboard.html";

        

    });
    loadDummyBtn.addEventListener("click", function (e) {
        e.preventDefault();

        localStorage.setItem("users", JSON.stringify(usersData));
        localStorage.setItem("blogs", JSON.stringify(blogsData));
        showMessage("Dummy data loaded successfully!", "green");
    });


   
})

