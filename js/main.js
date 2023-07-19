$(document).ready(function(){
    var user = localStorage.getItem('user');
    if (localStorage.getItem('user')){
        $('.auth').attr('class', 'auth _hide');
        $('body').removeAttr('class');
        $('#task_owner').attr('value', user);
    

    $('#task__btn1').click(function(event){
        $('.task__form').toggleClass('_hide');
        $('.form').toggleClass('_hide');
        $('body').toggleClass('_lock');
        $('#task_type').attr('value', '1');
    });
    $('#task__btn2').click(function(event){
        $('.task__form').toggleClass('_hide');
        $('.form').toggleClass('_hide');
        $('body').toggleClass('_lock');
        $('#task_type').attr('value', '2');
    });
    $('#task__btn3').click(function(event){
        $('.task__form').toggleClass('_hide');
        $('.form').toggleClass('_hide');
        $('body').toggleClass('_lock');
        $('#task_type').attr('value', '3');
    });
    $('#task__btn4').click(function(event){
        $('.task__form').toggleClass('_hide');
        $('.form').toggleClass('_hide');
        $('body').toggleClass('_lock');
        $('#task_type').attr('value', '4');
    });
    $('.task__form').click(function(event){
        $('.task__form').toggleClass('_hide');
        $('.form').toggleClass('_hide');
        $('body').toggleClass('_lock');
    });
    $('#close').click(function(event){
        $('.task__form').toggleClass('_hide');
        $('.form').toggleClass('_hide');
        $('body').toggleClass('_lock');
    });
    const buttons = document.querySelectorAll('a');

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
                data: {'status':status, 'id':id},
                dataType: 'html',
                beforeSend: function() {

                }
            });
        });
    });

    $("#insert_task").on("click", function(){
        var name = $("#task_name").val();
        var body = $("#task_body").val();
        var date = $("#task_deadline").val();
        var status = $("#task_status").val();
        var owner = $("#task_owner").val();
        var type = $("#task_type").val();
        
        if (name != '' && body != '') {
            $.ajax({
                url: 'include/insert__task.php',
                type: 'POST',
                cache: false,
                data: {'name':name, 'body':body, 'date':date, 'status':status, 'owner':owner, 'type':type},
                dataType: 'html',
                beforeSend: function() {
                    $('.task__form').toggleClass('_hide');
                    $('.form').toggleClass('_hide');
                    $('body').toggleClass('_lock');
                    $("#form__task").trigger("reset");
                }
            });
        } else {
            alert("Заполните поля Название и Описание");
        }

    });
};
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