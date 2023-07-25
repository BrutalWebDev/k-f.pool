<?php

    require_once 'db_connect.php';

    $status = $_POST['status'];
    $id = $_POST['id'];

    $sql = mysqli_query($link, 
    "UPDATE task SET status = '".$status."' WHERE id_task = '".$id."'");
   // $sql = "UPDATE task SET status = : $status WHERE id_task = :$id";
    // mysqli_close($link);
?>