<?php
    require_once 'db_connect.php';

    $res = mysqli_query($link, "SELECT * FROM users");

    while ($pole = mysqli_fetch_assoc($res)) {
        echo "
        <option>".$pole['name']."</option>
        ";
    }
   // mysqli_close($link);
?>