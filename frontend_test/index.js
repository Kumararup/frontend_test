document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Submitting login form', { username, password });

    fetch('http://localhost:8888/frontend_test/index.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => {
        console.log('Response received', response);
        return response.json();
    })
    .then(data => {
        console.log('Data received', data);
        if (data.userType) {
            // Store user type in session storage
            sessionStorage.setItem('User_type', data.userType);

            // Redirect based on user type
            if (data.userType === 'admin') {
                window.location.href = 'product.html?user=' + encodeURIComponent(data.userType);
            } else if (data.userType === 'user') {
                window.location.href = 'product.html?user=' + encodeURIComponent(data.userType);
            }
        } else {
            alert('Invalid credentials');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while logging in.');
    });
});

// Check user type and redirect if not logged in
document.addEventListener('DOMContentLoaded', function() {
    const userType = sessionStorage.getItem('userType');
    if (!userType) {
        window.location.href = 'index.html';
    }
});