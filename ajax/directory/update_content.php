<?php require_once($_SERVER['DOCUMENT_ROOT']."/cfg/core.php"); // ïîäêëþ÷åíèå ÿäðà
// ÏÎÄÊËÞ×ÅÍÈÅ Ê ÁÄ
$db = new MyDB();
$db->connect();

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

$content = addslashes($data['content']);
//$content = htmlspecialchars($content); // ýêðàíèðóåì HTML òåãè
$subIssue = $data['subIssue'];

$query = "UPDATE H_DIRECTORY SET TEXT_DATA='$content' WHERE SUBISSUE='$subIssue'";
$db->run($query);

