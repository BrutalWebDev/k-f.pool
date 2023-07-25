<?php
    require_once 'db_connect.php';

    $id = $_POST['id'];
    $name = $_POST["name"];
    $body = $_POST["body"];
    $date = $_POST["date"];
    $status = $_POST["status"];
    $type = $_POST["type"];
    $executor = $_POST["executor"];


    $sql = 
    mysqli_query($link, 
    "UPDATE task SET 
        name = '".$name."',
        body = '".$body."',
        date = '".$date."',
        status = '".$status."',
        type = '".$type."',
        executor = '".$executor."'
        WHERE id_task = '".$id."'");

    //mysqli_close($link);
?>