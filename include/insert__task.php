<?php
    require 'db_connect.php';

    $name = $_POST["name"];
    $body = $_POST["body"];
    $locate = $_POST["locate"];
    $date = $_POST["date"];
    $status = $_POST["status"];
    $owner = $_POST["owner"];
    $type = $_POST["type"];
    $executor = $_POST["executor"];
    $today = $_POST["today"];

    $sql = 
    mysqli_query($link, 
    "INSERT INTO task (name, body, locate, date, today, status, owner, type, executor) 
        VALUES ('$name', '$body', '$locate', '$date', '$today', '$status', '$owner', '$type', '$executor')");

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