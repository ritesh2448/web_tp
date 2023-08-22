// login.js
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    
    // Send login request using AJAX
    fetch('api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirect to the product list page on successful login
            window.location.href = "productList.html";
        } else {
            alert("Login failed. Please check your credentials.");
        }
    })
    .catch(error => {
        console.error('Error logging in:', error);
    });
});
