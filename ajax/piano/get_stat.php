<?php require_once($_SERVER['DOCUMENT_ROOT']."/cfg/core.php"); // ����������� ����
// ����������� � ��
$db = new MyDB();

$db->dblogin = "root"; // ��� ����� � ���� ������
$db->dbpass = ""; // ��� ������ � ���� ������
$db->db = "homebase"; // �������� ���� ��� �����
$db->dbhost="192.168.0.10";

$db->connect();

$query = "SELECT SUM(SPENT_TIME_MIN) AS SUMM FROM H_SONATA";
$db->run($query);

$db->row();

echo $db->data['SUMM'];



