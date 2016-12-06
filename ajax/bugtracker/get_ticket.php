<? require_once($_SERVER['DOCUMENT_ROOT']."/cfg/core.php"); // ïîäêëş÷åíèå ÿäğà
// ÏÎÄÊËŞ×ÅÍÈÅ Ê ÁÄ
$db = new MyDB();
$db->connect();

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

$containFormated = addslashes($data[contain]);

$query = "SELECT * FROM HOMEBASE.H_BUGTRACKER WHERE ROW_ID=2";
$db->run($query);

$db->fetch();

echo $db->data;