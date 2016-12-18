<?php require_once($_SERVER['DOCUMENT_ROOT']."/cfg/core.php"); // ïîäêëþ÷åíèå ÿäðà
// ÏÎÄÊËÞ×ÅÍÈÅ Ê ÁÄ
$db = new MyDB();
$db->connect();

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

$query = "INSERT INTO H_TRAINING (ROW_ID, DATE, EX_1, EX_2, EX_3, EX_4, EX_5, EX_6, EX_7, EX_8, EX_9, EX_10, EX_11, EX_12, EX_13) VALUES (NULL, '" . $data['date'] . "', '" . $data['ex1'] . "', '".$data['ex2']."', '" . $data['ex3'] . "', '" . $data['ex4'] . "', '" . $data['ex5'] . "','".$data['ex6']."','".$data['ex7']."','".$data['ex8']."','".$data['ex9']."','".$data['ex10']."','".$data['ex11']."','".$data['ex12']."','".$data['ex13']."')";
$db->run($query);

//echo $query;
?>
