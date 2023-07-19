<?php
    require_once 'db_connect.php';

    $name = $_POST["name"];
    $body = $_POST["body"];
    $date = $_POST["date"];
    $status = $_POST["status"];
    $owner = $_POST["owner"];
    $type = $_POST["type"];


    $sql = 
    mysqli_query($link, 
    "INSERT INTO task (name, body, date, status, owner, type) 
        VALUES ('$name', '$body', '$date', '$status', '$owner', '$type')");

    //mysqli_close($link);
?>