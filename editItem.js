// editItem.js
const editItemForm = document.getElementById("editItemForm");
const saveChangesBtn = document.getElementById("saveChangesBtn");

// Retrieve item ID from query parameter
const queryParams = new URLSearchParams(window.location.search);
const itemId = queryParams.get("id");

// Placeholder: Fetch item details based on the itemId
const currentItem = {
    id: itemId,
    name: "Product X",
    quantity: 20
};

// Populate form fields with current item details
document.getElementById("editedItemName").value = currentItem.name;
document.getElementById("editedItemQuantity").value = currentItem.quantity;

saveChangesBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const editedItemName = document.getElementById("editedItemName").value;
    const editedItemQuantity = document.getElementById("editedItemQuantity").value;

    // Send update request using AJAX
    fetch(`api/products/${itemId}`, {  // Replace with your actual API endpoint
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: editedItemName, quantity: editedItemQuantity })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirect back to the Product List page on successful update
            window.location.href = "productList.html";
        } else {
            alert("Failed to update item. Please try again.");
        }
    })
    .catch(error => {
        console.error('Error updating item:', error);
    });
});
