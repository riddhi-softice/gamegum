<?php
/* header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "game_website";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT position, content FROM game_add";
$result = $conn->query($sql);

$ads = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $ads[] = $row;
    }
} 
$conn->close();

echo json_encode($ads); */

header('Content-Type: application/json'); // Ensure JSON response
error_reporting(E_ALL);
ini_set('display_errors', 1); // Show errors for debugging

$data = [
    ["position" => "left", "content" => "<div>Left Ad</div>"],
    ["position" => "right", "content" => "<div>Right Ad</div>"]
];

echo json_encode($data);
?>

