<?php
    require 'include/db_connect.php';

    $res = mysqli_query($link, "SELECT * FROM task WHERE type LIKE '1'");

    while ($pole = mysqli_fetch_assoc($res)) {
      echo "
      <div 
      class='task__item'
        data-id='".$pole['id_task']."'
        data-name='".$pole['name']."'
        data-body='".$pole['body']."'
        data-locate='".$pole['locate']."'
        data-date='".$pole['date']."'
        data-status='".$pole['status']."'
        data-owner='".$pole['owner']."'
        data-executor='".$pole['executor']."'
        data-type='".$pole['type']."'>
          <div class='task__item-nav'>
            <div class='task__item-number'>№ ".$pole['id_task']."</div>
              <div class='task__item-status'>
                    <div class='dropdown'>
                        <button class='dropbtn'>".$pole['status']."</button>
                        <div class='dropdown-content'>
                          <a class='status_in' value=".$pole['id_task']." data='В работе' href='#'>В работе</a>
                          <a class='status_in' value=".$pole['id_task']." data='Ожидание' href='#'>Ожидание</a>
                          <a class='status_in' value=".$pole['id_task']." data='Приостановлено' href='#'>Приостановлено</a>
                          <a class='status_in' value=".$pole['id_task']." data='Выполнено' href='#'>Выполнено</a>
                        </div>
                    </div>
              </div>
        </div>
        <div class='task__item-body' value=".$pole['id_task'].">
            <h1>".$pole['name']."</h1>
        </div>
        <div class='task__item-date'>
         <div class='task__item-date-col'>
            <h1>Создано: ".$pole['today']."</h1>
            <h1>Срок: ".$pole['date']."</h1>
         </div> 
            <h1>".$pole['executor']."</h1>
        </div> 
      </div>";}
      $link->close();
?>