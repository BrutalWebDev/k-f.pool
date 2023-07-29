<?php
    require 'db_connect.php';

    $res = mysqli_query($link, "SELECT * FROM locate");

    while ($pole = mysqli_fetch_assoc($res)) {
        echo "
        <option>".$pole['name']."</option>
        ";
    }
    mysqli_close($link);
?>