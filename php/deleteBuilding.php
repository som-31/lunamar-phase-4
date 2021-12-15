<?php
/**
 * To allow cross origin access
 */
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

try{
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);
    $id = $_POST['id'];

    /**
     * Make connection to database
     */
    $connection = new mysqli("utacloud2", "rxp3828_superadmin", "padwal.deshmukh.jadhav", "rxp3828_lunamar2");
    // Check connection
    if ($connection -> connect_errno) {
        echo "Failed to connect to MySQL: " . $connection -> connect_error;
        exit();
    }
    $stmt = $connection->prepare("DELETE FROM building where id = ?");
    $stmt->bind_param('i', $id);
    $result = $stmt->execute();
    $connection->close();
    echo $result;

} catch(Exception $e){
  echo $e->getMessage();
}
