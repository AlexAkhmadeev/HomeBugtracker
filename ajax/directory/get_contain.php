<?php require_once($_SERVER['DOCUMENT_ROOT']."/cfg/core.php"); // подключение ядра
// ПОДКЛЮЧЕНИЕ К БД
$db = new MyDB();
$db->connect();

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

$subIssue = $data['subIssue'];

$query = "SELECT TEXT_DATA FROM H_DIRECTORY WHERE SUBISSUE='$subIssue'";
$db->run($query);

$db->row();

echo json_encode(array("textData" => $db->data['TEXT_DATA']));

?>