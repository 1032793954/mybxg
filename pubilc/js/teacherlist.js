define(['jquery', 'template','util', 'bootstrap'], function ($, template,util) {
    /*����·���ĵ�ַ������ʾ�˵�*/
    util.setMenu(location.pathname);
    /*���ú�̨�ӿ���Ӧ����*/
    $.ajax({
        url: '/api/teacher',
        type: 'get',
        dataType: 'json',
        /*��Ӧ�ɹ�֮��*/
        success: function (data) {
            /*����������Ⱦҳ�涨��ģ��*/
            /*��������ģ��*/
            var html = template('teacherTpl', {list: data.result});
            /*��Ⱦҳ��*/
            $('#teacherInfo').html(html);

            /*��ҳ����Ⱦ�ɹ���֮����鿴��ť���¼�*/
            $('.preview').click(function () {
                /*�õ���ǰ�����id*/
                var td = $(this).closest('td');
                var tcId = td.attr('data-tcId');
                /*����id��������Ⱦ����*/
                $.ajax({
                    url: '/api/teacher/view',
                    type: 'get',
                    dataType: 'json',
                    data: tcId,
                    success: function (data) {
                        /*����������Ⱦҳ�涨��ģ��*/
                        /*��������ģ��*/
                        var html = template('modalTpl', data.result);
                        /*��Ⱦҳ��*/
                        $('#modalInfo').html(html);
                        /* ��ʾ����*/
                        $('#teacherModal').modal();
                    }

                });
            });


            /*�������ú�ע��*/
            $('.eod').click(function () {
                /*�õ���ǰ�����id*/
                var td = $(this).closest('td');
                var tcId = td.attr('data-tcId');
                var tcStatus = td.attr('data-status');
                /*����this*/
                var that=this;
                $.ajax({
                    url: '/api/teacher/handle',
                    type: 'post',
                    data: {
                        tc_id: tcId,
                        tc_status: tcStatus
                    },
                    dataType:'json',
                    /*��Ӧ�ɹ���*/
                    success:function(data){
                        console.log(data);
                        /*���data��Ӧ�ɹ����޸�״̬*/
                        if(data.code==200){
                            /*�޸ĵ�ǰ״̬*/
                            td.attr('data-status',data.result.tc_status);
                        //    �޸�������Ϣ
                            if(data.result.tc_status==0){
                                $(that).html(123);
                            }else{
                                $(that).html('456');
                            }
                        }
                    }
                });
            });
        }

    });


});