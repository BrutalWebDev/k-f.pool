<?php
    require_once 'db_connect.php';

    $login = $_POST["login"];

    $res = mysqli_query($link, "SELECT * FROM `users` WHERE `name` LIKE '".$login."'");
    $pole = mysqli_fetch_assoc($res);

    if ($pole['name'] == $login) {

        $link->close();
      
        // Возврат HTTP 200
        http_response_code(200);
      } else {
        // Закрытие соединения с БД
        $link->close();
        
        // Возврат ошибки и HTTP 500
        http_response_code(500);
        echo "Error: ".$pole['name']." != ". $login;

      }
?>