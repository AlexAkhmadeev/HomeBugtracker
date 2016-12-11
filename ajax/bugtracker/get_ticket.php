<?php require_once($_SERVER['DOCUMENT_ROOT']."/cfg/core.php"); // ïîäêëþ÷åíèå ÿäðà
// ÏÎÄÊËÞ×ÅÍÈÅ Ê ÁÄ

$db = new MyDB();
$db->connect();

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

$ticketId = $data['ticket_id'];

$query = "select * from HOME.H_BUGTRACKER where row_id='$ticketId'";
$db->run($query);

$db->row();

$currentTicket = array(
    "id" => $db->data['ROW_ID'],
    "title" => $db->data['TITLE'],
    "code" => $db->data['CODE'],
    "contain" => $db->data['CONTAIN'],
    "status" => $db->data['STATUS'],
    "created" => $db->data['CREATED']
);

echo json_encode($currentTicket);