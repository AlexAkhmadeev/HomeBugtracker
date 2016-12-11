<?php require_once($_SERVER['DOCUMENT_ROOT']."/cfg/core.php"); // ïîäêëþ÷åíèå ÿäðà
// ÏÎÄÊËÞ×ÅÍÈÅ Ê ÁÄ
$db = new MyDB();
$db->connect();

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

$contain = addslashes($data['contain']);
$rowId = $data['id'];

$query = "UPDATE H_BUGTRACKER SET CONTAIN='$contain' WHERE ROW_ID='$rowId'";
$db->run($query);

//echo json_encode($data);