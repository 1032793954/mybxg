define(['jquery','template'],function($,template){
    /*���ú�̨�ӿ���Ӧ����*/
    $.ajax({
       url:'/api/teacher',
        type:'get',
        dataType:'json',
        /*��Ӧ�ɹ�֮��*/
        success:function(data){
            /*����������Ⱦҳ�涨��ģ��*/
            /*��������ģ��*/
            var html=template('teacherTpl',{list:data.result});
            /*��Ⱦҳ��*/
            $('#teacherInfo').html(html);
        }
    })
});