define(['jquery','cookie'],function($){
    //ʵ�ֵ�¼����
    $('#login').click(function () {
        $.ajax({
            type: 'post',
            url: '/api/login',
            data: $('#loginForm').serialize(),
            dataType: 'json',
            success: function (data) {
                if (data.code == 200) {
                // ��½�ɹ�֮���ȱ���cookie
                 $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
                //��¼�ɹ�����ת����ҳ��
                    location.href = '/main/index'
                } else {
                    alert('�û��������');
                }

            }

        });
        return false;
    });
});