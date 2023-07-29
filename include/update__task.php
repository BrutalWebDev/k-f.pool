<?php
    require 'db_connect.php';

    $id = $_POST['id'];
    $name = $_POST["name"];
    $body = $_POST["body"];
    $date = $_POST["date"];
    $status = $_POST["status"];
    $locate = $_POST["locate"];
    $type = $_POST["type"];
    $executor = $_POST["executor"];


    $sql = 
    mysqli_query($link, 
    "UPDATE task SET 
        name = '".$name."',
        body = '".$body."',
        locate = '".$locate."',
        date = '".$date."',
        status = '".$status."',
        type = '".$type."',
        executor = '".$executor."'
        WHERE id_task = '".$id."'");

    if ($link->affected_rows > 0) {
        // Запрос прошел успешно, возвращаем HTTP-код 200
        mysqli_close($link);
        http_response_code(200);
    } else {
        // Запрос не прошел, возвращаем HTTP-код 500
        mysqli_close($link);
        http_response_code(500);    
    }

?>