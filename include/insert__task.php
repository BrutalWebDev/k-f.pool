<?php
    require_once 'db_connect.php';

    $name = $_POST["name"];
    $body = $_POST["body"];
    $date = $_POST["date"];
    $status = $_POST["status"];
    $owner = $_POST["owner"];
    $type = $_POST["type"];
    $executor = $_POST["executor"];


    $sql = 
    mysqli_query($link, 
    "INSERT INTO task (name, body, date, status, owner, type, executor) 
        VALUES ('$name', '$body', '$date', '$status', '$owner', '$type', '$executor')");

    //mysqli_close($link);
?>