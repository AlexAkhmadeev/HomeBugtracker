<?php require_once($_SERVER['DOCUMENT_ROOT']."/cfg/core.php"); // ����������� ����
// ����������� � ��
$db = new MyDB();
$db->connect();

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

$issue = $data['issue'];

$query = "SELECT SUBISSUE FROM H_DIRECTORY WHERE ISSUE='$issue'";
$db->run($query);

$values = array();

while($db->fetch()) {
    array_push($values, $db->data['SUBISSUE']);
}

echo json_encode($values);

?>