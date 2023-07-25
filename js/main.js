$(document).ready(function(){

    var user = localStorage.getItem('user');

    if (localStorage.getItem('user')){
        $('.auth').attr('class', 'auth _hide');
        $('body').removeAttr('class');
        $('#task_owner').attr('value', user);
    };
    $('#task__btn1').click(function(event){
        $('.task__form').toggleClass('_hide');
        $('.form').toggleClass('_hide');
        //$('body').toggleClass('_lock');
        $('#task_type').attr('value', '1');

        var windowHeight = document.documentElement.scrollHeight;
        var taskForm = document.querySelector('.task__form');
        taskForm.style.height = windowHeight+'px';
    });
    $('#task__btn2').click(function(event){
        $('.task__form').toggleClass('_hide');
        $('.form').toggleClass('_hide');
        //$('body').toggleClass('_lock');
        $('#task_type').attr('value', '2');

        var windowHeight = document.documentElement.scrollHeight;
        var taskForm = document.querySelector('.task__form');
        taskForm.style.height = windowHeight+'px';
    });
    $('#task__btn3').click(function(event){
        $('.task__form').toggleClass('_hide');
        $('.form').toggleClass('_hide');
        //$('body').toggleClass('_lock');
        $('#task_type').attr('value', '3');

        var windowHeight = document.documentElement.scrollHeight;
        var taskForm = document.querySelector('.task__form');
        taskForm.style.height = windowHeight+'px';
    });
    $('#task__btn4').click(function(event){
        $('.task__form').toggleClass('_hide');
        $('.form').toggleClass('_hide');
        //$('body').toggleClass('_lock');
        $('#task_type').attr('value', '4');

        var windowHeight = document.documentElement.scrollHeight;
        var taskForm = document.querySelector('.task__form');
        taskForm.style.height = windowHeight+'px';
    });
    $('.task__form').click(function(event){
        $('.task__form').toggleClass('_hide');
        $('.form').toggleClass('_hide');
        //$('body').toggleClass('_lock');
    });
    $('.task__open-background').click(function(event){
        $('.task__open-background').toggleClass('_hide');
        $('.task__open').toggleClass('_hide');
        $("#form__task-open").trigger("reset");
        $('#task_executor-open :first').remove();
        $('#task_status-open :first').remove();
        $('#task_type-open :first').remove();
        //$('body').toggleClass('_lock');
    });
    $('#close').click(function(event){
        $('.task__form').toggleClass('_hide');
        $('.form').toggleClass('_hide');
        //$('body').toggleClass('_lock');
    });
    $('#close__task-open').click(function(event){
        $('.task__open-background').toggleClass('_hide');
        $('.task__open').toggleClass('_hide');
        $("#form__task-open").trigger("reset");
        $('#task_executor-open :first').remove();
        $('#task_status-open :first').remove();
        $('#task_type-open :first').remove();
        //$('body').toggleClass('_lock');
    });
    $('#auth_exit').click(function(event){
        $('.auth').attr('class', 'auth _hide');
        localStorage.clear();
    });

    $('.task__item').click(function(event){
        
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
        var type = $(this).attr('data-type');

        if (type == '1'){
            type = 'Долгосрочные'
        } else if (type == '2'){
            type = 'Срочные'
        } else if (type == '3'){
            type = 'Обычные'
        } else if (type == '4'){
            type = 'Закупки'
        }

        if (!executor) {
            executor = owner
        }

        function reverse(str){
            var dateArr = str.split(".");
            return dateArr[2] + '-' + dateArr[1] + '-' + dateArr[0];
        }

        date = reverse(date);

        $('.task__open-background').toggleClass('_hide');
        $('.task__open').toggleClass('_hide');
        $("#form__task-open").trigger("reset");

        var windowHeight = document.documentElement.scrollHeight;
        var taskForm = document.querySelector('.task__open-background');
        taskForm.style.height = windowHeight+'px';

        $('#task__open-val-id').val(id);
        $('#task__open-id').text("Задача № " + id);
        $('#task__open-owner').text("Создал " + owner);
        $('#task_executor-open').prepend('<option selected disabled="disabled">'+executor+'</option>');
        $('#task_executor-open').attr('value',executor);
        $('#task_type-open').prepend('<option selected disabled="disabled">'+type+'</option>');
        $('#task_type-open').attr('value',type);
        $('#task_name-open').val(name);
        $('#task_deadline-open').val(date);
        $('#task_status-open').prepend('<option selected disabled="disabled">'+status+'</option>');
        $('#task_status-open').attr('value',status);
        $('#task_body-open').val(body);
        
    });

    const buttons = document.querySelectorAll('.status_in');

    // Добавление обработчика событий на каждую кнопку
    buttons.forEach(a => {
        a.addEventListener('click', () => {
            // Получение названия нажатой кнопки
            const id = a.getAttribute('value');
            const status = a.getAttribute('data');
            console.log(status);

            if (localStorage.getItem('user')){
                $.ajax({
                    url: 'include/status__update.php',
                    type: 'POST',
                    cache: false,
                    data: {'status':status, 'id':id},
                    dataType: 'html',
                    beforeSend: function() {
                        
                    }
                });
            } else {
                alert('Вы не авторизованы');
            };
        });
    });

    $("#insert_task").on("click", function(){
        var name = $("#task_name").val();
        var body = $("#task_body").val();
        var date = $("#task_deadline").val();
        var status = $("#task_status").val();
        var owner = $("#task_owner").val();
        var type = $("#task_type").val();
        var executor = $("#task_executor").val();
        
        function reverse(str){
            var dateArr = str.split("-");
            return dateArr[2] + '.' + dateArr[1] + '.' + dateArr[0];
        }

        if (name != '' && body != '' && owner != '') {
            $.ajax({
                url: 'include/insert__task.php',
                type: 'POST',
                cache: false,
                data: {'name':name, 'body':body, 'date':reverse(date), 'status':status, 'owner':owner, 'type':type, 'executor':executor},
                dataType: 'html',
                beforeSend: function() {
                    $('.task__form').toggleClass('_hide');
                    $('.form').toggleClass('_hide');
                    //$('body').toggleClass('_lock');
                    $("#form__task").trigger("reset");
                }
            });
        } else {
            alert("Заполните поля Название и Описание, либо авторизируйтесь заного.");
        }

    });
    
    $("#update_task").on("click", function(){
        var id = $("#task__open-val-id").val();
        var name = $("#task_name-open").val();
        var body = $("#task_body-open").val();
        var date = $("#task_deadline-open").val();
        var status = $("#task_status-open").val();
        var type = $("#task_type-open").val();
        var executor = $("#task_executor-open").val();

        if (!status) {
            status = document.getElementById('task_status-open').getAttribute('value');
        }
        if (!executor) {
            executor = document.getElementById('task_executor-open').getAttribute('value');
        }
        if (!type) {
            type = document.getElementById('task_type-open').getAttribute('value');
        }
        
        if (type == 'Долгосрочные'){
            type = '1'
        } else if (type == 'Срочные'){
            type = '2'
        } else if (type == 'Обычные'){
            type = '3'
        } else if (type == 'Закупки'){
            type = '4'
        }
        
        function reverse(str){
            var dateArr = str.split("-");
            return dateArr[2] + '.' + dateArr[1] + '.' + dateArr[0];
        }

        date = reverse(date);

        if (name != '' && body != '') {
            $.ajax({
                url: 'include/update__task.php',
                type: 'POST',
                cache: false,
                data: {'id':id,'name':name, 'body':body, 'date':date, 'status':status, 'type':type, 'executor':executor},
                dataType: 'html',
                beforeSend: function() {
                    $('.task__open-background').toggleClass('_hide');
                    $('.task__open').toggleClass('_hide');
                    $("#form__task-open").trigger("reset");
                    $('#task_executor-open :first').remove();
                    $('#task_status-open :first').remove();
                    $('#task_type-open :first').remove();
                }
            });
        } else {
            alert("Заполните поля Название и Описание, либо авторизируйтесь заного.");
        }

    });

    $("#auth_open").on("click", function(){
        var login = $("#auth_login").val();
        
        if (login != '') {
            $.ajax({
                url: 'include/session.php',
                type: 'POST',
                cache: false,
                data: {'login':login},
                dataType: 'html',
                success: function(data) {
                    localStorage.setItem('user', login);
                    $('.auth').attr('class', 'auth _hide');
                    $('body').removeAttr('class');
                },
                error: function(data) {
                    alert("Ошибка: логин не найден.");
                }
            });
        } else {
            alert("Заполните поле Логин");
        }
    });
});