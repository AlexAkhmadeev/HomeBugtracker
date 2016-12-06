<? require_once($_SERVER['DOCUMENT_ROOT']."/cfg/core.php"); // подключение ядра
// ПОДКЛЮЧЕНИЕ К БД
$db = new MyDB();
$db->connect();

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

$containFormated = addslashes($data['contain']);

$query = "insert into homebase.H_BUGTRACKER (TICKET_NAME, TICKET_BODY, STATUS) values ('$data[title]','$containFormated', 'Новый')";
$db->run($query);

echo $data['contain'];