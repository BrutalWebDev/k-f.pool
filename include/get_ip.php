<?php
require 'db_connect.php';

$ip = $_SERVER['REMOTE_ADDR'];//локальный ip
// преобразуем IP в строку
$ip_string = strval($ip);

$res = mysqli_query($link, "SELECT * FROM `users` WHERE `ip` LIKE '".$ip_string."'");
$pole = mysqli_fetch_assoc($res);

if ($pole['ip'] == $ip_string) {
    $link->close();
    // Возврат HTTP 200
    echo "<input type='hidden' id='get__ip' value='".$ip_string."'>";
    echo "<input type='hidden' id='get__name' value='".$pole['name']."'>";
    echo "<input type='hidden' id='get__date' value=''>";
    http_response_code(200);
  } else {
    echo "<input type='hidden' id='get__ip' value='".$ip_string."'>";
    echo "<input type='hidden' id='get__name' value='".$pole['name']."'>";
    // Закрытие соединения с БД
    $link->close();
    // Возврат ошибки и HTTP 500
    http_response_code(500);
  }
?>