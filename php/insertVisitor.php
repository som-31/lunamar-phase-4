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
  $connection = new mysqli("utacloud2", "rxp3828_superadmin", "padwal.deshmukh.jadhav", "rxp3828_lunamar2");
      // Check connection
if ($connection -> connect_errno) {
    echo "Failed to connect to MySQL: " . $connection -> connect_error;
    exit();
  }
  
  $stmt = $connection->prepare("INSERT INTO visitor (first_name, last_name,approval,address,state,city,entry_at,exit_at,phone,zip_code,incident_id,visiting_apartment_id) VALUES (?, ?,?, ?,?, ?,?, ?,?, ?,'1', '1')");
    
    $stmt->bind_param("ss", $_POST['first_name'], $_POST['last_name'], $_POST['approval'], $_POST['address'], $_POST['state'], $_POST['city'], $_POST['entry_at'], $_POST['exit_at'], $_POST['phone'], $_POST['zip_code'], $_POST['incident_id'], $_POST['visiting_apartment_id']);
    $stmt->execute();
    var_dump($stmt);

   
} catch(Exception $e){
  echo $e->getMessage();
}
?>
