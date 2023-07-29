<?php
    require_once 'db_connect.php';

    $ip = $_POST["ip"];

    $res = mysqli_query($link, "SELECT * FROM `users` WHERE `ip` LIKE '".$ip."'");
    $pole = mysqli_fetch_assoc($res);

    if ($pole['ip'] == $ip) {
        $link->close();
        // Возврат HTTP 200
        http_response_code(200);
      } else {
        // Закрытие соединения с БД
        $link->close();
        // Возврат ошибки и HTTP 500
        http_response_code(500);
      }
?>