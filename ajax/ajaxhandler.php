<?php require_once($_SERVER['DOCUMENT_ROOT']."/cfg/core.php"); // подключение ядра
// ПОДКЛЮЧЕНИЕ К БД
$db = new MyDB();
$db->connect();

$db->run("select * from h_exercises");

$doneExercises = array();

$path = $_SERVER['DOCUMENT_ROOT']."/files/counter.csv";
$fp = fopen($path, "a"); // Открываем файл в режиме записи


$mytext = "Это строку необходимо нам записать\r\n"; // Исходная строка

$tempArray = array();

while($db->fetch()) {

    $tempArray = array(
        "id" => $db->data['ROW_ID'],
        "name" => $db->data['NAME'],
        "title" => $db->data['TITLE'],
        "setTimeSec" => $db->data['SET_TIME_SEC'],
        "restTimeSec" => $db->data['REST_TIME_SEC'],
        "repeatNumber" => $db->data['REPEAT_NUMBER'],
        "timesNumber" => $db->data['TIMES_NUMBER'],
    );

    array_push($doneExercises, $tempArray);

    $test = fwrite($fp, ($tempArray['id']."\t".$tempArray['name']."\t".$tempArray['title']."\t".$tempArray['setTimeSec']."\t".$tempArray['restTimeSec']."\t".$tempArray['repeatNumber']."\t".$tempArray['timesNumber'])."\r\n"); // Запись в файл
    //if ($test) echo 'Данные в файл успешно занесены.';
    //else echo 'Ошибка при записи в файл.';
}







fclose($fp); //Закрытие файла





