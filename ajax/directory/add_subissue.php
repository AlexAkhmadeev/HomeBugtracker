<?php require_once($_SERVER['DOCUMENT_ROOT']."/cfg/core.php"); // подключение ядра
// ПОДКЛЮЧЕНИЕ К БД
$db = new MyDB();
$db->connect();

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

$issue = $data['issue'];
$subIssue = $data['title'];
$contain = addslashes($data['contain']);
//$contain = htmlspecialchars($contain);


$query = "insert into H_DIRECTORY (ISSUE, SUBISSUE, TEXT_DATA) values ('$issue','$subIssue','$contain')";
$db->run($query);

echo json_encode(array("newId" => $db->data['ROW_ID']));