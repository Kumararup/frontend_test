document.addEventListener('DOMContentLoaded', () => {
    // Elements references
    const loadingSpinner = document.getElementById('loadingSpinner');
    const container = document.getElementById('container');
    const productsElement = document.getElementById('products');
    const filterInput = document.getElementById('filterInput');
    const loginButton = document.getElementById('loginButton');
    const loginModal = document.getElementById('loginModal');
    const closeModal = document.querySelector('.close');
    const loginForm = document.getElementById('loginForm');
    const categoriesElement = document.getElementById('categories');
    const cartDetailsButton = document.getElementById('cartDetailsButton');
    const cartModal = document.getElementById('cartModal');
    const closeCartModal = document.querySelector('.close-cart');
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotalElement = document.querySelector('.cart-summary .cart-total');

    let productsData = [];

      // Function to get URL parameters
      function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        //alert(urlParams);
        return urlParams.get(param);
    }

    // Retrieve the user type from URL and display it
    const userType = getQueryParam('user');
    if (userType) {
        document.getElementById('Username').textContent = userType;
    } else {
        document.getElementById('Username').textContent = 'undefined';
    }





    // Load products
    fetch('http://localhost:8888/frontend_test/product1.php')
        .then(response => response.json())
        .then(data => {
            loadingSpinner.style.display = 'none';
            container.style.display = 'block';
            if (data && data.products) {
                displayProducts(data.products);
                displayCategories(data.products);
            } else {
                productsElement.innerHTML = '<p>No products available</p>';
            }
        })
        .catch(error => {
            loadingSpinner.style.display = 'none';
            container.style.display = 'block';
            productsElement.innerHTML = `<p>Error loading products: ${error.message}</p>`;
        });

    // Filter products
    filterInput.addEventListener('input', () => {
        const query = filterInput.value.toLowerCase();
        if (query.length > 2) {
            filterProducts(query);
        } else {
            displayProducts(productsData);
        }
    });

    // Display products
    function displayProducts(products) {
        productsData = products;
        productsElement.innerHTML = products.map(product => createProductHTML(product)).join('');
    }

    // Display categories
    function displayCategories(products) {
        const categories = [...new Set(products.map(product => product.category))];
        // Add "HOME" category
        categories.unshift("HOME"); // Adds "HOME" at the beginning of the array
        categoriesElement.innerHTML = categories.map(category => `<li><a href="#" data-category="${category}">${category}</a></li>`).join('');
    }

    // Filter products by query
    function filterProducts(query) {
        const filteredProducts = productsData.filter(product => product.product_name.toLowerCase().includes(query));
        if (filteredProducts.length === 0) {
            productsElement.innerHTML = '<p>No data match</p>';
        } else {
            productsElement.innerHTML = filteredProducts.map(product => createProductHTML(product)).join('');
        }
    }

    // Create product HTML
    function createProductHTML(product) {
        return `
            <div class="product">
                <img src="${product.product_image}" alt="${product.product_name}">
                <h2>${product.product_name}</h2>
                <h2>${product.category}</h2>
                <p>${product.price}€</p>
                <p>${product.available_location}</p>
                <button class="add-to-cart" data-id="${product.Id}">Add to Cart</button>
            </div>
        `;
    }

    // Cart state
    let cart = [];

    // Add to cart
    productsElement.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = e.target.getAttribute('data-id');
            
            addToCart(productId);
        }
    });

    // Add a product to the cart and update the cart display
    function addToCart(productId) {
        const product = productsData.find(p => p.Id == productId);
        if (!product) {
            console.error(`Product with ID ${productId} not found`);
            return;
        }
        const cartItem = cart.find(item => item.id == productId);
        if (cartItem) {
            // Increment quantity if the product is already in the cart
            cartItem.quantity++;
        } else {
            // Add new product to the cart with quantity 1
            cart.push({...product, quantity: 1});
        }
       
        //cart.push(product);
        
        updateCart();
    }

    // Update the cart display (count and total price)
    function updateCart() {
        const cartCountElement = document.querySelector('.cart-count');
        const cartCount = cart.length;

        
        const cartTotal = cart.reduce((total, product) => total + parseFloat(product.price), 0);

        cartCountElement.textContent = cartCount;
        cartTotalElement.textContent = `${cartTotal.toFixed(2)}€`;
        updateCartDetails();
    }

    // Update the cart details display
    function updateCartDetails() {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">        
                <div class="cart-item-image">
                  <img src="${item.product_image}" alt="${item.product_name}"width="50%" height="100">
                </div>
                <div class="cart-item-details">
                  <h3>${item.product_name}</h3>
                  <p>Price: ${item.price}€</p>
                </div>
           
    
            
            </div>
        `).join('');
    }

    // Toggle cart details visibility
    cartDetailsButton.addEventListener('click', () => {
        cartModal.style.display = 'block';
    });

    closeCartModal.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == cartModal) {
            cartModal.style.display = 'none';
        }
    });

    // Handle category click event
    categoriesElement.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const category = e.target.getAttribute('data-category');
            if (category === "HOME") {
                displayProducts(productsData);
            } else {
                filterByCategory(category);
            }
        }
    });

    function filterByCategory(category) {
        const filteredProducts = productsData.filter(product => product.category === category);
        productsElement.innerHTML = filteredProducts.map(product => createProductHTML(product)).join('');
    }

    // Login modal
    loginButton.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    // Close login modal
    closeModal.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    // Close login modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        }
    });

    // Handle login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        loginUser(username, password);
    });

    // Validate user login credentials
    function loginUser(username, password) {
        fetch('mocks/users.json')
            .then(response => response.json())
            .then(users => {
                const user = users.find(user => user.username === username && user.password === password);
                if (user) {
                    alert('Login successful');
                    loginModal.style.display = 'none';
                } else {
                    alert('Invalid username or password');
                }
            });
    }
});