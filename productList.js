// productList.js
const addItemPageBtn = document.getElementById("addItemPageBtn");
const productTable = document.getElementById("productTable");

addItemPageBtn.addEventListener("click", () => {
    // Redirect to the Add Item page
    window.location.href = "addItem.html";
});

// Placeholder for product data
let productsData = [];

function displayProducts() {
    // Clear existing table rows
    productTable.querySelector("tbody").innerHTML = "";

    // Display products in the table
    for (const product of productsData) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>
                <button class="editBtn" data-id="${product.id}">Edit</button>
                <button class="deleteBtn" data-id="${product.id}">Delete</button>
            </td>
        `;
        productTable.querySelector("tbody").appendChild(row);
    }

    // Attach event listeners to edit buttons
    const editButtons = document.querySelectorAll(".editBtn");

    editButtons.forEach(button => {
        button.addEventListener("click", () => handleEditButton(button.dataset.id));
    });
}

function handleEditButton(itemId) {
    // Redirect to the Edit Item page, passing the item ID as a query parameter
    window.location.href = `editItem.html?id=${itemId}`;
}

// Fetch products using AJAX and update the table
function fetchProductsAndDisplay() {
    // Fetch products using AJAX
    fetch('api/products')  // Replace with your actual API endpoint
        .then(response => response.json())
        .then(products => {
            // Update the products array and refresh the display
            productsData = products;
            displayProducts();
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
}

// Initial fetch and display
fetchProductsAndDisplay();
