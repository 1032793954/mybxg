define(['jquery'],function($){
    //ʵ�ֵ�¼����
    $('#login').click(function () {
        $.ajax({
            type: 'post',
            url: '/api/login',
            data: $('#loginForm').serialize(),
            dataType: 'json',
            success: function (data) {
                if (data.code == 200) { //��¼�ɹ�����ת����ҳ��
                    location.href = '/main/index'
                } else {
                    alert('�û��������')
                }

            }

        });
        return false;
    });
});