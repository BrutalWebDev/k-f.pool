<?php
    require_once 'db_connect.php';

    $id = $_POST['id'];

    $res = mysqli_query($link, "SELECT * FROM task WHERE id_task = '".$id."'");

    $pole = mysqli_fetch_assoc($res)
    echo "
    
     ";
      //$link->close();
?>