<?php require_once($_SERVER['DOCUMENT_ROOT']."/cfg/core.php"); // подключение ядра
// ПОДКЛЮЧЕНИЕ К БД
$db = new MyDB();
$db->connect();

$query = "SELECT * FROM H_BUGTRACKER";
$db->run($query);

$tickets = array();

while($db->fetch()) {
    array_push($tickets, array(
        "id" => $db->data['ROW_ID'],
        "title" => $db->data['TITLE'],
        "code" => $db->data['CODE'],
        //"contain" => $db->data['CONTAIN'],
        "status" => $db->data['STATUS'],
        "created" => $db->data['CREATED'],
        "type" => $db->data['TYPE']
    ));
}

echo json_encode($tickets);

?>