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
  
  $stmt = $connection->prepare("INSERT INTO visitor (pool_id, subdivision_name,opening_hours,closing_hours,last_inspection_at,next_inspection_at VALUES ('1', ?, ?, ?, ?, ?, ?)");
    
    $stmt->bind_param("ss", $_POST['pool_id'], $_POST['subdivision_name'], $_POST['opening_hours'], $_POST['closing_hours'], $_POST['last_inspection_at'], $_POST['next_inspection_at']);
    $stmt->execute();
    var_dump($stmt);

   
} catch(Exception $e){
  echo $e->getMessage();
}
?>
