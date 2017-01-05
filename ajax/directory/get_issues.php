<?php require_once($_SERVER['DOCUMENT_ROOT']."/cfg/core.php"); // подключение ядра
// ПОДКЛЮЧЕНИЕ К БД
$db = new MyDB();
$db->connect();

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

$query = "SELECT DISTINCT ISSUE FROM H_DIRECTORY";
$db->run($query);

$values = array();

while($db->fetch()) {
    array_push($values, $db->data['ISSUE']);
}

echo json_encode($values);

?>