<?php
$db_host='192.168.0.19';
$db_user='admin.an';
$db_pass='?BereziSkazki49';
$db_database='pool.kif';
@$link=mysqli_connect($db_host,$db_user,$db_pass,$db_database);
if(!mysqli_connect_errno())
//  mysqli_query($link, 'set name utf8');
mysqli_query($link, 'SET NAMES utf8');  
else
{
	echo'Ошибка подключения';
}
?>