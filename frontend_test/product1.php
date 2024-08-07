<?php
// index.php

header('Content-Type: application/json');

// Read the raw POST data
//$postData = file_get_contents("php://input");

// Decode the JSON data
//$data = json_decode($postData, true);

// Check if data is received correctly
//if (json_last_error() !== JSON_ERROR_NONE) {
  //  echo json_encode(['error' => 'Invalid JSON received']);
    //exit;
//}

// Retrieve the username and password from the decoded data
//$username = $data['username'] ?? '';
//$password = $data['password'] ?? '';

// Log the received username and password (for debugging, remove in production)
//error_log("Received username: $username");
//error_log("Received password: $password");

// Database connection details
$servername = "localhost";
$dbUsername = "root"; // Adjust as needed
$dbPassword = "Nopass@123"; // Adjust as needed
$database = "Frontend_test";  // Adjust as needed

try {
    // Create a new PDO connection
    $conn = new PDO("mysql:host=$servername;dbname=$database", $dbUsername, $dbPassword);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Prepare the SQL statement
    $stmt = $conn->prepare("SELECT Id, product_name, product_image,product_color,category,price,currency,available_location FROM products ");
  //  $stmt->bindParam(':username', $username);
    //$stmt->bindParam(':password', $password);

    // Execute the statement
    $stmt->execute();

    // Fetch the result
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if ($result) {
        // Send back a JSON response with the user type
        echo json_encode(['products' => $result], JSON_PRETTY_PRINT);
    } else {
        echo json_encode(['error' => 'No products found']);
    }
} catch(PDOException $e) {
    echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
}




$conn = null;
?>