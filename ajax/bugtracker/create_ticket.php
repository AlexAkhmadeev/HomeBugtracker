<?php require_once($_SERVER['DOCUMENT_ROOT']."/cfg/core.php"); // подключение ядра
// ПОДКЛЮЧЕНИЕ К БД
$db = new MyDB();
$db->connect();

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

$title = $data['title'];
$code = $data['code'];
$contain = addslashes($data['contain']);
$created = date('d.m.Y');
$status = 'Новый';
$type = $data['type'];

$query = "insert into HOME.H_BUGTRACKER (TITLE, CODE, CONTAIN, CREATED, STATUS, TYPE) values ('$title','$code','$contain','$created','$status','$type')";
$db->run($query);

echo json_encode($data);