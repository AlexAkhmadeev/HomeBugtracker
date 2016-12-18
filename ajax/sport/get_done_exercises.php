<?php require_once($_SERVER['DOCUMENT_ROOT']."/cfg/core.php"); // ïîäêëþ÷åíèå ÿäðà
// ÏÎÄÊËÞ×ÅÍÈÅ Ê ÁÄ

$db = new MyDB();
$db->connect();

$query = "select * from h_training order by date desc";
$db->run($query);

$doneExercises = array();

while($db->fetch()) {
    array_push($doneExercises, array(
        "id" => $db->data['ROW_ID'],
        "date" => $db->data['DATE'],
        "ex1" => $db->data['EX_1'],
        "ex2" => $db->data['EX_2'],
        "ex3" => $db->data['EX_3'],
        "ex4" => $db->data['EX_4'],
        "ex5" => $db->data['EX_5'],
        "ex6" => $db->data['EX_6'],
        "ex7" => $db->data['EX_7'],
        "ex8" => $db->data['EX_8'],
        "ex9" => $db->data['EX_9'],
        "ex10" => $db->data['EX_10'],
        "ex11" => $db->data['EX_11'],
        "ex12" => $db->data['EX_12'],
        "ex13" => $db->data['EX_13']
    ));
}

echo json_encode($doneExercises);



