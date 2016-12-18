<?php require_once($_SERVER['DOCUMENT_ROOT']."/cfg/core.php"); // ïîäêëþ÷åíèå ÿäðà
// ÏÎÄÊËÞ×ÅÍÈÅ Ê ÁÄ
$db = new MyDB();

$db->dblogin = "root"; // ÂÀØ ËÎÃÈÍ Ê ÁÀÇÅ ÄÀÍÍÛÕ
$db->dbpass = ""; // ÂÀØ ÏÀÐÎËÜ Ê ÁÀÇÅ ÄÀÍÍÛÕ
$db->db = "homebase"; // ÍÀÇÂÀÍÈÅ ÁÀÇÛ ÄËß ÑÀÉÒÀ
$db->dbhost="192.168.0.10";

$db->connect();

$query = "SELECT SUM(SPENT_TIME_MIN) AS SUMM FROM H_SONATA";
$db->run($query);

$db->row();

echo $db->data['SUMM'];



