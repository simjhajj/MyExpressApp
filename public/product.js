// Define the products array in the global scope
const products = [
    { name: 'Loyall Cat Salmon Recipe', category: 'cats', image: 'images/cat1.png' },
    { name: 'Loyall Cat Chicken Recipe', category: 'cats', image: 'images/cat2.png' },
    { name: 'Loyall Dog Sensitive Skin & Stomach Salmon Recipe', category: 'dogs', image: 'images/dog1.png' },
    { name: 'Loyall Dog Puppy Chicken Recipe', category: 'dogs', image: 'images/dog2.png' },
    { name: 'Loyall Adult Dog Chicken & Brown Rice Recipe', category: 'dogs', image: 'images/dog3.png' },
    { name: 'Loyall Dog Small Breed Chicken Recipe', category: 'dogs', image: 'images/dog4.png' },
    { name: 'Loyall Dog Large Breed Chicken Recipe', category: 'dogs', image: 'images/dog5.png' },
    { name: 'Loyall Dog Adult Food', category: 'dogs', image: 'images/dog6.png' },
    { name: 'Loyall Performance Dog Food', category: 'dogs', image: 'images/dog7.png' },
    { name: 'Loyall Active Dog Food', category: 'dogs', image: 'images/dog8.png' },
];

document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-container');
    const categoryLinks = document.querySelectorAll('.category-filter');

    // Event listener for product clicks
    productsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('product')) {
            const productName = event.target.querySelector('h3').textContent;
            displayProductModal(productName);
        }
    });

    // Event listener for close button
    document.querySelector('.close').addEventListener('click', () => {
        hideProductModal();
    });

    // Event listener for overlay click
    document.getElementById('overlay').addEventListener('click', () => {
        hideProductModal();
    });

    // Event listener for category links
    categoryLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const selectedCategory = event.target.dataset.category;
            displayProducts(selectedCategory);
        });
    });

    // Initial display (show all products)
    displayProducts();
});

function displayProducts(category = null) {
    const filteredProducts = category ? products.filter(product => product.category === category) : products;

    // Display products in the main container
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';

    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" height="300px" alt="${product.name}">
            <h3>${product.name}</h3>
        `;
        productsContainer.appendChild(productElement);
    });
}

function displayProductModal(productName) {
    const productModal = document.getElementById('productModal');
    const overlay = document.getElementById('overlay');

    // Find the product by name
    const product = products.find(p => p.name === productName);

    // Display product details in the modal
    productModal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <img src="${product.image}" height="300px" alt="${product.name}">
            <h2 id="productName">${product.name}</h2>
            <p id="productPrice"></p>
            <button id="buyButton">Buy Now</button>
            <button id="addToCartButton">Add to Cart</button>
        </div>
    `;

    // Show the modal and overlay
    productModal.style.display = 'block';
    overlay.style.display = 'block';

    // Event listener for Buy Now button
    document.getElementById('buyButton').addEventListener('click', () => {
        // Redirect to sign-in or sign-up page
        window.location.href = 'signin.html'; // Replace 'signin.html' with your actual sign-in page URL
    });

    // Event listener for Add to Cart button
    document.getElementById('addToCartButton').addEventListener('click', () => {
        // Redirect to sign-in or sign-up page
        window.location.href = 'signin.html'; // Replace 'signup.html' with your actual sign-up page URL
    });
}


function hideProductModal() {
    const productModal = document.getElementById('productModal');
    const overlay = document.getElementById('overlay');

    // Hide the modal and overlay
    productModal.style.display = 'none';
    overlay.style.display = 'none';
}
