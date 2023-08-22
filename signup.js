// signup.js
const signupBtn = document.getElementById("signupBtn");

signupBtn.addEventListener("click", () => {
    const signupUsername = document.getElementById("signupUsername").value;
    const signupPassword = document.getElementById("signupPassword").value;
    
    // Send signup request using AJAX
    fetch('api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: signupUsername, password: signupPassword })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirect to the product list page on successful signup
            window.location.href = "productList.html";
        } else {
            alert("Signup failed. Please try again.");
        }
    })
    .catch(error => {
        console.error('Error signing up:', error);
    });
});
