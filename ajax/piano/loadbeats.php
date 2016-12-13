<?php require_once($_SERVER['DOCUMENT_ROOT']."/cfg/core.php"); // ����������� ����
// ����������� � ��
$db = new MyDB();

$db->dblogin = "root"; // ��� ����� � ���� ������
$db->dbpass = ""; // ��� ������ � ���� ������
$db->db = "homebase"; // �������� ���� ��� �����
$db->dbhost="192.168.0.10";

$db->connect();

$query = "select * from h_sonata";
$db->run($query);

$beats = array();

while($db->fetch()) {
    array_push($beats, array(
        "id" => $db->data['ROW_ID'],
        "beats" => $db->data['BEATS'],
        "minutes" => $db->data['SPENT_TIME_MIN'],
        "complexity" => $db->data['COMPLEXITY'],
        "status" => $db->data['STATUS'],
        "updated" => $db->data['UPDATED'],
    ));
}

echo json_encode($beats);



