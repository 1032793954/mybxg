define(['jquery'],function($){
    //实现登录功能
    $('#login').click(function () {
        $.ajax({
            type: 'post',
            url: '/api/login',
            data: $('#loginForm').serialize(),
            dataType: 'json',
            success: function (data) {
                if (data.code == 200) { //登录成功和跳转到主页面
                    location.href = '/main/index'
                } else {
                    alert('用户输入错误')
                }

            }

        });
        return false;
    });
});