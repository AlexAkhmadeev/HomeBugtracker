<?php require_once($_SERVER['DOCUMENT_ROOT']."/cfg/core.php"); // ïîäêëþ÷åíèå ÿäðà
// ÏÎÄÊËÞ×ÅÍÈÅ Ê ÁÄ
$db = new MyDB();
$db->connect();

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

$name = $data['name'];
$title = $data['title'];
$setTimeSec = $data['setTimeSec'] ? $data['setTimeSec'] : 0;
$restTimeSec = $data['restTimeSec'] ? $data['restTimeSec'] : 0;
$repeatNumber = $data['repeatNumber'] ? $data['repeatNumber'] : 0;
$timesNumber = $data['timesNumber'] ? $data['timesNumber'] : 0;

$query = "INSERT INTO H_EXERCISES (ROW_ID, NAME, TITLE, SET_TIME_SEC, REST_TIME_SEC, REPEAT_NUMBER, TIMES_NUMBER) VALUES (NULL, '$name','$title','$setTimeSec','$restTimeSec','$repeatNumber','$timesNumber')";
$db->run($query);

echo $query;
?>
