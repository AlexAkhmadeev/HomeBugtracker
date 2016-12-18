<?php require_once($_SERVER['DOCUMENT_ROOT']."/cfg/core.php"); // ïîäêëþ÷åíèå ÿäðà
// ÏÎÄÊËÞ×ÅÍÈÅ Ê ÁÄ

$db = new MyDB();
$db->connect();

$query = "select * from h_exercises";
$db->run($query);

$doneExercises = array();

while($db->fetch()) {
    array_push($doneExercises, array(
        "id" => $db->data['ROW_ID'],
        "name" => $db->data['NAME'],
        "title" => $db->data['TITLE'],
        "setTimeSec" => $db->data['SET_TIME_SEC'],
        "restTimeSec" => $db->data['REST_TIME_SEC'],
        "repeatNumber" => $db->data['REPEAT_NUMBER'],
        "timesNumber" => $db->data['TIMES_NUMBER'],
    ));
}

echo json_encode($doneExercises);

