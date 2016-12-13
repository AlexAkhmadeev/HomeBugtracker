<?php require_once($_SERVER['DOCUMENT_ROOT']."/cfg/core.php"); // ïîäêëþ÷åíèå ÿäðà
// ÏÎÄÊËÞ×ÅÍÈÅ Ê ÁÄ
$db = new MyDB();


$db->dblogin = "root"; // ÂÀØ ËÎÃÈÍ Ê ÁÀÇÅ ÄÀÍÍÛÕ
$db->dbpass = ""; // ÂÀØ ÏÀÐÎËÜ Ê ÁÀÇÅ ÄÀÍÍÛÕ
$db->db = "homebase"; // ÍÀÇÂÀÍÈÅ ÁÀÇÛ ÄËß ÑÀÉÒÀ
$db->dbhost="192.168.0.10";


$db->connect();



$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

$id = $data["row_id"];
$col_name = $data["col_name"];
$value = $data["value"];

$query = "UPDATE H_SONATA SET $col_name='$value' WHERE ROW_ID=$id";
$db->run($query);

echo $query;

?>

