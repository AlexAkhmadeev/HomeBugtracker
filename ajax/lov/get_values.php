<?php require_once($_SERVER['DOCUMENT_ROOT']."/cfg/core.php"); // подключение ядра
// ПОДКЛЮЧЕНИЕ К БД
$db = new MyDB();
$db->connect();

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

$lovType = $data['lov_type'];

$query = "SELECT * FROM H_LOV WHERE LOV_TYPE='$lovType'";
$db->run($query);

$values = array();

while($db->fetch()) {
    array_push($values, $db->data['LOV_VALUE']);
}

echo json_encode($values);

?>