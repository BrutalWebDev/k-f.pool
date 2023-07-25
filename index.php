<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="css/style.css">

    <link type="image/x-icon" href="./favicon.ico" rel="shortcut icon">
    <link type="Image/x-icon" href="./favicon.ico" rel="icon">

    <script src="https://kit.fontawesome.com/92632b3473.js" crossorigin="anonymous"></script>
    <script src="./js/fontawesome.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    
    <title>Карл и Фридрих</title>

    <meta name="description" content="Онлайн табло активных задач ИТ отдела Карл и Фридрих">
</head>
<body class="_lock">

    <header>
        <div class="nav">
            <div class="nav__item"><a href="http://kif.pool.ru/">Главная</a></div>
            <div class="nav__item"><a href="">Закрытые задачи</a></div>
            <div class="nav__item"><a href="">Wiki</a></div>
            <div class="nav__item"><a id="auth_exit" href="">Выйти</a></div>
        </div>
    </header>
    <div class="auth">
        <div class="auth__nav">
            <form action="" class="auth__form" method="post" id="form__login">
                <label>Логин</label>
                <input type="hidden" id="temp">
                <input type="text" name="auth_login" id="auth_login">
                <button class="auth__button" id="auth_open" type="button">Войти</button>
            </form>
        </div>
    </div>
    
    <main class="wrapper">
        <section class="task">
            <div class="task__list">
                <div class="task__list-nav">
                    <h1>Долгосрочные</h1>
                    <span class="task__btn"><i id="task__btn1" class="fa-regular fa-square-plus fa-lg"></i></span>
                </div>
                <?php
                include_once "include/view__task_1.php"; 
                ?>
            </div>
            <div class="task__list">
                <div class="task__list-nav">
                    <h1>Срочные</h1>
                    <span class="task__btn"><i id="task__btn2" class="fa-regular fa-square-plus fa-lg"></i></span>
                </div>
                <?php
                include_once "include/view__task_2.php"; 
                ?>
            </div>
            <div class="task__list">
                <div class="task__list-nav">
                    <h1>Обычные</h1>
                    <span class="task__btn"><i id="task__btn3" class="fa-regular fa-square-plus fa-lg"></i></span>
                </div>
                <?php
                include_once "include/view__task_3.php"; 
                ?>
            </div>
            <div class="task__list">
                <div class="task__list-nav">
                    <h1>Закупки</h1>
                    <span class="task__btn"><i id="task__btn4" class="fa-regular fa-square-plus fa-lg"></i></span>
                </div>
                <?php
                include_once "include/view__task_4.php"; 
                ?>
            </div>
            <div class="task__form _hide"></div>
            <div class="form _hide">
                <div class="form__nav">
                    <h1>Новая задача</h1>
                    <i class="fa-solid fa-xmark fa-lg fff" id="close"></i>
                </div>
                <form action="" method="post" id="form__task-open">
                    <fieldset class="form__task-body">
                        <input type="hidden" name="task_type" id="task_type">
                        <input type="hidden" name="task_owner" id="task_owner">
                        <label>Название</label>
                        <input type="text" name="task_name" id="task_name" required>
                        <label>Описание</label>
                        <textarea name="task_body" id="task_body" cols="30" rows="10" required></textarea>
                        <label>Крайний срок (если есть)</label>
                        <input type="date" name="task_deadline" id="task_deadline">
                        <label>Статус</label>
                        <select name="task_status" id="task_status">
                            <option selected>В работе</option>
                            <option>Ожидание</option>
                            <option>Приостановлено</option>
                            <option>Выполнено</option>
                        </select>
                        <label>Исполнитель</label>
                        <select name="task_executor" id="task_executor">
                        <?php
                        include_once "include/view__executor.php"; 
                        ?>
                        </select>
                        <button href="#" id="insert_task" type="button" class="form__button-save">Создать</button>
                    </fieldset>
                </form>
            </div>

            <div class="task__open-background _hide"></div>
            <div class="task__open _hide">
                <div class="form__nav">
                    <h1 id="task__open-id"></h1>
                    <i class="fa-solid fa-xmark fa-lg fff" id="close__task-open"></i>
                </div>
                <form action="" method="post" id="form__task-open">
                    <fieldset class="form__task-body">
                        <label id="task__open-owner">Создал </label>
                        <input type="hidden" id="task__open-val-id" value="">
                        <label>Исполнитель </label>
                        <select name="task_executor" id="task_executor-open" value="">
                            <?php
                            include "include/view__executor.php"; 
                            ?>
                        </select>

                        <label>Тип</label>
                        <select name="task_type" id="task_type-open">
                            <option >Долгосрочные</option>
                            <option>Срочные</option>
                            <option>Обычные</option>
                            <option>Закупки</option>
                        </select>

                        <label>Название</label>
                        <input type="text" name="task_name" id="task_name-open" required>

                        <label id="task__open-deadline">Крайний срок</label>
                        <input type="date" name="task_deadline" id="task_deadline-open">

                        <label>Статус</label>
                        <select name="task_status" id="task_status-open">
                            <option>В работе</option>
                            <option>Ожидание</option>
                            <option>Приостановлено</option>
                            <option>Выполнено</option>
                        </select>



                        <label>Описание</label>
                        <textarea name="task_body" id="task_body-open" cols="30" rows="10" required></textarea>
                    
                        <button href="#" id="update_task" type="button" class="form__button-save">Сохранить</button>
                    </fieldset>
                </form>
            </div>
        </section>
    </main>
    <footer>

    </footer>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="./js/main.js"></script>
</body>
</html>