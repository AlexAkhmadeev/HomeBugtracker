<?php require_once($_SERVER['DOCUMENT_ROOT']."/cfg/core.php"); // подключение ядра
// ПОДКЛЮЧЕНИЕ К БД
$db = new MyDB();
$db->connect();

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

$beats = $data['beat_from'].'-'.$data['beat_to'];

$query = "INSERT INTO homebase.H_SONATA (ROW_ID, BEAT_FROM, BEAT_TO, BEATS, SPENT_TIME_MIN, COMPLEXITY, STATUS, UPDATED) VALUES (NULL, '" . $data['beat_from'] . "', '" . $data['beat_to'] . "', '".$beats."', '" . 0 . "', '" . $data['complexity'] . "', '" . $data['status'] . "','".'1.12.12'."')";
//$db->run($query);

$query2 = 'select * from h_bugtracker';
$db->run($query2);

$beats = array();

while($db->fetch()) {
    array_push($beats, array(
        "id" => $db->data['ROW_ID'],
        "title" => $db->data['TITLE'],
        "code" => $db->data['CODE'],
        "contain" => $db->data['CONTAIN'],
        "created" => $db->data['CREATED']
    ));
}

echo json_encode($beats);

?>

