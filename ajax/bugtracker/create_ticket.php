<?php require_once($_SERVER['DOCUMENT_ROOT']."/cfg/core.php"); // подключение ядра
// ПОДКЛЮЧЕНИЕ К БД
$db = new MyDB();
$db->connect();

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

$title = $data['title'];
$code = $data['code'];
$contain = addslashes($data['contain']);
//$created = date('d.m.Y');
$created = $data['date'];
$status = 'Новый';
$type = $data['type'];

$query = "insert into HOME.H_BUGTRACKER (TITLE, CODE, CONTAIN, CREATED, STATUS, TYPE) values ('$title','$code','$contain','$created','$status','$type')";
$db->run($query);
$db->run("commit");


$db->stop();

$newQuery = "select * from HOME.H_BUGTRACKER where TITLE='$title'";
$db->run($newQuery);

$db->row();

echo json_encode(array("newId" => $db->data['ROW_ID']));