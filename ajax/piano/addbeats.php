<?php require_once($_SERVER['DOCUMENT_ROOT']."/cfg/core.php"); // подключение ядра
// ПОДКЛЮЧЕНИЕ К БД
$db = new MyDB();

$db->dblogin = "root"; // ВАШ ЛОГИН К БАЗЕ ДАННЫХ
$db->dbpass = ""; // ВАШ ПАРОЛЬ К БАЗЕ ДАННЫХ
$db->db = "homebase"; // НАЗВАНИЕ БАЗЫ ДЛЯ САЙТА
$db->dbhost="192.168.0.10";

$db->connect();

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

$beats = $data['beat_from'].'-'.$data['beat_to'];

date_default_timezone_set('Europe/Kiev');
$created = date('d.m.Y');

$query = "INSERT INTO H_SONATA (ROW_ID, BEAT_FROM, BEAT_TO, BEATS, SPENT_TIME_MIN, COMPLEXITY, STATUS, UPDATED) VALUES (NULL, '" . $data['beat_from'] . "', '" . $data['beat_to'] . "', '".$beats."', '" . 0 . "', '" . $data['complexity'] . "', '" . $data['status'] . "','".$created."')";
$db->run($query);


?>

