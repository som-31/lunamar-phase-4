<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
// Port will be removed once deployed on the cloud


try{
  echo("Hi");
    $connection = new mysqli("localhost", "root", "", "test1");
    // Check connection
if ($mysqli -> connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
  }
  
    $stmt = $connection->prepare("INSERT INTO building (name, floors, total_apartments, occupancy) VALUES (?, ?, ?, ?)");
    
    $stmt->bind_param("ssss", $_POST['name'], $_POST['floors'], $_POST['total_apartments'], $_POST['occupancy']);
    $stmt->execute();
    var_dump($stmt);

   
} catch(Exception $e){
  echo $e->getMessage();
}
?>
