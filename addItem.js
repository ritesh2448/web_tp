// addItem.js
// addItem.js
const addItemForm = document.getElementById("addItemForm");

addItemForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const itemName = document.getElementById("itemName").value;
    const itemQuantity = document.getElementById("itemQuantity").value;
    
    const newItem = {
        name: itemName,
        quantity: parseInt(itemQuantity)
    };

    // Send add item request using AJAX
    fetch('api/addItem', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newItem)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirect to the product list page on successful item addition
            window.location.href = "productList.html";
        } else {
            alert("Item addition failed. Please try again.");
        }
    })
    .catch(error => {
        console.error('Error adding item:', error);
    });
});
