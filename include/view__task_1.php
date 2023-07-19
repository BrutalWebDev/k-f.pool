<?php
    require_once 'include/db_connect.php';

    $res = mysqli_query($link, "SELECT * FROM task WHERE type LIKE '1'");

    while ($pole = mysqli_fetch_assoc($res)) {
      echo "
      <div class='task__item'>
      <div class='task__item-nav'>
          <div class='task__item-number'>№ ".$pole['id_task']."</div>
          <div class='task__item-status'>
                <div class='dropdown'>
                    <button class='dropbtn'>".$pole['status']."</button>
                    <div class='dropdown-content'>
                    <a class='in_work' value=".$pole['id_task']." data='В работе' href='#'>В работе</a>
                    <a class='in_wait' value=".$pole['id_task']." data='Ожидание' href='#'>Ожидание</a>
                    <a class='in_pause' value=".$pole['id_task']." data='Приостановлено' href='#'>Приостановлено</a>
                    <a class='in_ready' value=".$pole['id_task']." data='Выполнено' href='#'>Выполнено</a>
                    </div>
                  </div>
          </div>
      </div>
      <div class='task__item-body'>
          <h1>".$pole['name']."</h1>
      </div>
      <div class='task__item-date'>
          <h1>Срок: ".$pole['date']."</h1>
          <h1>".$pole['owner']."</h1>
      </div> 
      </div>";}
      //mysqli_close($link);
?>