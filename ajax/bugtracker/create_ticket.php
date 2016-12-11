<?php require_once($_SERVER['DOCUMENT_ROOT']."/cfg/core.php"); // подключение ядра
// ПОДКЛЮЧЕНИЕ К БД
$db = new MyDB();
$db->connect();

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

$title = $data['title'];
$code = $data['code'];
$contain = addslashes($data['contain']);
$created = '10.10.2016';
$status = 'Новый';

$query = "insert into HOME.H_BUGTRACKER (TITLE, CODE, CONTAIN, CREATED, STATUS) values ('$title','$code','$contain','$created','$status')";
$db->run($query);

echo json_encode($data);