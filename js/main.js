$(document).ready(function () {
    var str = new Date().toLocaleDateString('en-GB');
    var dateArr = str.split("/");
    var today = dateArr[0] + '.' + dateArr[1] + '.' + dateArr[2];


    var ip = document.getElementById('get__ip').getAttribute('value');
    var name = document.getElementById('get__name').getAttribute('value');
    //console.log(name);

    if (!name) {
        document.getElementById('body').remove();

    } else {
        $('#task_owner').attr('value', name);

        function backgroundSizeNew() {/////////////////Запуск функции задает полупрозрачному фону реальную высоту страницы(при создании новой задачи)
            var windowHeight = document.documentElement.scrollHeight;
            var taskForm = document.querySelector('.task__form');
            taskForm.style.height = windowHeight + 'px';
        }
        function backgroundSizeOpen() {/////////////////Запуск функции задает полупрозрачному фону реальную высоту страницы (при открытии задачи)
            var windowHeight = document.documentElement.scrollHeight + 200;
            var taskForm = document.querySelector('.task__open-background');
            taskForm.style.height = windowHeight + 'px';
        }

        $('#task_body-open').click(function (event) { /////////////////Нажатие на содержимое задачи
            backgroundSizeOpen();
        });
        $('#task__btn1').click(function (event) { /////////////////Нажатие кнопки Добавления Долгосрочной задачи
            $('.task__form').toggleClass('_hide');
            $('.form').toggleClass('_hide');
            $('#task_type').attr('value', '1');
            backgroundSizeNew();
        });
        $('#task__btn2').click(function (event) {/////////////////Нажатие кнопки Добавления Срочной задачи
            $('.task__form').toggleClass('_hide');
            $('.form').toggleClass('_hide');
            $('#task_type').attr('value', '2');
            backgroundSizeNew();
        });
        $('#task__btn3').click(function (event) { /////////////////Нажатие кнопки Добавления Обычной задачи
            $('.task__form').toggleClass('_hide');
            $('.form').toggleClass('_hide');
            $('#task_type').attr('value', '3');
            backgroundSizeNew();
        });
        $('#task__btn4').click(function (event) {
            $('.task__form').toggleClass('_hide');
            $('.form').toggleClass('_hide');
            $('#task_type').attr('value', '4');
            backgroundSizeNew();
        });
        $('.task__form').click(function (event) {/////////////////Клик по полупрозрачному фону при создании новой задачи
            $('.task__form').toggleClass('_hide');
            $('.form').toggleClass('_hide');
        });
        $('.task__open-background').click(function (event) {/////////////////Клик по полупрозрачному фону в открытой задаче
            $('.task__open-background').toggleClass('_hide');
            $('.task__open').toggleClass('_hide');
            $("#form__task-open").trigger("reset");
            $('#task_executor-open :first').remove();
            $('#task_status-open :first').remove();
            $('#task_type-open :first').remove();
        });
        $('#close').click(function (event) {/////////////////Клик по крестику при создании новой задачи
            $('.task__form').toggleClass('_hide');
            $('.form').toggleClass('_hide');
        });
        $('#close__task-open').click(function (event) {/////////////////Клик по крестику в открытой задаче
            $('.task__open-background').toggleClass('_hide');
            $('.task__open').toggleClass('_hide');
            $("#form__task-open").trigger("reset");
            $('#task_executor-open :first').remove();
            $('#task_status-open :first').remove();
            $('#task_type-open :first').remove();
        });
        $('#auth_exit').click(function (event) {/////////////////Клик по кнопке выход
            $('.auth').attr('class', 'auth _hide');
            localStorage.clear();
        });

        $('#delete_task').dblclick(function (event) {/////////////////Клик по кнопке выход
            var id = $("#task__open-val-id").val();

            $.ajax({
                url: 'include/delete_task.php',
                type: 'POST',
                cache: false,
                data: { 'id': id },
                dataType: 'html',
                beforeSend: function () {
                    $('.task__open-background').toggleClass('_hide');
                    $('.task__open').toggleClass('_hide');
                    $("#form__task-open").trigger("reset");
                    $('#task_executor-open :first').remove();
                    $('#task_status-open :first').remove();
                    $('#task_type-open :first').remove();
                },
                success: function () {
                    location.reload();
                }
            });
        });

        //////////////////////////////////////////Открыть выбранную задачу
        $('.task__item').click(function (event) {


            if ($(event.target).is('.status_in') ||
                $(event.target).is('.dropbtn')) {
                return;
            }

            var id = $(this).attr('data-id');
            var name = $(this).attr('data-name');
            var body = $(this).attr('data-body');
            var date = $(this).attr('data-date');
            var status = $(this).attr('data-status');
            var owner = $(this).attr('data-owner');
            var executor = $(this).attr('data-executor');
            var locate = $(this).attr('data-locate');
            var type = $(this).attr('data-type');

            if (type == '1') {
                type = 'Долгосрочные'
            } else if (type == '2') {
                type = 'Срочные'
            } else if (type == '3') {
                type = 'Обычные'
            } else if (type == '4') {
                type = 'Закупки'
            }

            if (!executor) {
                executor = owner
            }

            function reverse(str) {
                var dateArr = str.split(".");
                return dateArr[2] + '-' + dateArr[1] + '-' + dateArr[0];
            }

            date = reverse(date);

            $('.task__open-background').toggleClass('_hide');
            $('.task__open').toggleClass('_hide');
            $("#form__task-open").trigger("reset");

            $('#task__open-val-id').val(id);
            $('#task__open-id').text("Задача № " + id);
            $('#task__open-owner').text("Создал " + owner);
            $('#task_executor-open').prepend('<option selected disabled="disabled">' + executor + '</option>');
            $('#task_executor-open').attr('value', executor);
            $('#task_locate-open').prepend('<option selected disabled="disabled">' + locate + '</option>');
            $('#task_locate-open').attr('value', locate);
            $('#task_type-open').prepend('<option selected disabled="disabled">' + type + '</option>');
            $('#task_type-open').attr('value', type);
            $('#task_name-open').val(name);
            $('#task_deadline-open').val(date);
            $('#task_deadline-open').attr('value', date);
            $('#task_status-open').prepend('<option selected disabled="disabled">' + status + '</option>');
            $('#task_status-open').attr('value', status);
            $('#task_body-open').val(body);

            $('#task_body-open').height(function() {
                this.style.height = (this.scrollHeight+20) + 'px';
            });
            backgroundSizeOpen();
        });

        ////////////////////////////////////Обновить статус задачи
        const buttons = document.querySelectorAll('.status_in');

        // Добавление обработчика событий на каждую кнопку
        buttons.forEach(a => {
            a.addEventListener('click', () => {
                // Получение названия нажатой кнопки
                const id = a.getAttribute('value');
                const status = a.getAttribute('data');
                console.log(status);

                $.ajax({
                    url: 'include/status__update.php',
                    type: 'POST',
                    cache: false,
                    data: { 'status': status, 'id': id },
                    dataType: 'html',
                    success: function () {
                        location.reload();
                    }
                });
            });
        });
        ///////////////////////////////////Создать новую задачу
        $("#insert_task").on("click", function () {
            var name = $("#task_name").val();
            var body = $("#task_body").val();
            var date = $("#task_deadline").val();
            var status = $("#task_status").val();
            var owner = $("#task_owner").val();
            var type = $("#task_type").val();
            var locate = $("#task_locate").val();
            var executor = $("#task_executor").val();

            function reverse(str) {
                var dateArr = str.split("-");
                return dateArr[2] + '.' + dateArr[1] + '.' + dateArr[0];
            }

            if (date.length != 10) {
                date = 'нет'
            }else{
                date = reverse(date)
            }

            if (name != '' && body != '' && owner != '') {
                $.ajax({
                    url: 'include/insert__task.php',
                    type: 'POST',
                    cache: false,
                    data: { 'name': name,
                     'body': body,
                     'locate': locate,
                     'date': date, 
                     'today': today, 
                     'status': status, 
                     'owner': owner, 
                     'type': type, 
                     'executor': executor },
                    dataType: 'html',
                    beforeSend: function () {
                        $('.task__form').toggleClass('_hide');
                        $('.form').toggleClass('_hide');
                        $("#form__task").trigger("reset");  
                    },
                    success: function () {
                        location.reload();
                    }
                });
            } else {
                alert("Заполните поля Название и Описание, либо авторизируйтесь заного.");
            }

        });

        $("#update_task").on("click", function () {
            var id = $("#task__open-val-id").val();
            var name = $("#task_name-open").val();
            var body = $("#task_body-open").val();
            var locate = $("#task_locate-open").val();
            var date = $("#task_deadline-open").val();
            var status = $("#task_status-open").val();
            var type = $("#task_type-open").val();
            var executor = $("#task_executor-open").val();


            if (!date) {
                date = document.getElementById('task_deadline-open').getAttribute('value');
            }
            if (!locate) {
                locate = document.getElementById('task_locate-open').getAttribute('value');
            }
            if (!status) {
                status = document.getElementById('task_status-open').getAttribute('value');
            }
            if (!executor) {
                executor = document.getElementById('task_executor-open').getAttribute('value');
            }
            if (!type) {
                type = document.getElementById('task_type-open').getAttribute('value');
            }

            if (type == 'Долгосрочные') {
                type = '1'
            } else if (type == 'Срочные') {
                type = '2'
            } else if (type == 'Обычные') {
                type = '3'
            } else if (type == 'Закупки') {
                type = '4'
            }

            if (date.length != 10) {
                date = 'нет'
            }else{
                date = reverse(date)
            }

            function reverse(str) {
                var dateArr = str.split("-");
                return dateArr[2] + '.' + dateArr[1] + '.' + dateArr[0];
            }


            if (name != '' && body != '') {
                $.ajax({
                    url: 'include/update__task.php',
                    type: 'POST',
                    cache: false,
                    data: { 'id': id, 'name': name, 'body': body, 'locate':locate, 'date': date, 'status': status, 'type': type, 'executor': executor },
                    dataType: 'html',
                    beforeSend: function () {
                        $('.task__open-background').toggleClass('_hide');
                        $('.task__open').toggleClass('_hide');
                        $("#form__task-open").trigger("reset");
                        $('#task_executor-open :first').remove();
                        $('#task_status-open :first').remove();
                        $('#task_type-open :first').remove();
                    },
                    success: function () {
                        location.reload();
                    }
                });
            } else {
                alert("Заполните поля Название и Описание");
            }

        });

    }




    /*$("#auth_open").on("click", function () {
        var login = $("#auth_login").val();

        if (login != '') {
            $.ajax({
                url: 'include/session.php',
                type: 'POST',
                cache: false,
                data: { 'login': login },
                dataType: 'html',
                success: function (data) {
                    localStorage.setItem('user', login);
                    $('.auth').attr('class', 'auth _hide');
                    $('body').removeAttr('class');
                },
                error: function (data) {
                    alert("Ошибка: логин не найден.");
                }
            });
        } else {
            alert("Заполните поле Логин");
        }
    });*/
});