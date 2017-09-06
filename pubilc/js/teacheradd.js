define(['jquery','template','util','datepicker','language','validate','form'],function($,template,util){
    /*���ò˵�ѡ��*/
    util.setMenu('/teacher/list');
    /*��ȡ�༭�Ľ�ʦid*/
    var tcId=util.qs('tc_id');
    if(tcId){
        /*�༭����*/
        $.ajax({
            url:'/api/teacher/edit',
            type:'get',
            dataType:'json',
            data:{tc_id:tcId},
            success:function(data){
                data.result.operate='�༭��ʦ';
                /*����������Ⱦģ��*/
                /*��������ģ��*/
                var html=template('teacherTpl',data.result);
                /*��Ⱦҳ��*/
                $('#teacherInfo').html(html);

                /*�ύ�༭��ʦ��*/
                submitForm('/api/teacher/update');

            }
        });
    }else{
        /*��Ӳ���*/
        var html=template('teacherTpl',{operate:'��ӽ�ʦ',tc_gender:1});
        /*��Ⱦҳ��*/
        $('#teacherInfo').html(html);

        /*�ύ��ӽ�ʦ��*/
        submitForm('/api/teacher/add');
    }



    /*�ύ�����÷������ð�ť����¼��ͱ���֤*/
    function submitForm(url){
      $('#teacherForm').validate({/*��form���һ��validate����*/
          sendForm:false,/*��ֹ����֤*/
          valid:function(){
          /*�����ύ��ʹ���ύ�����*/
            $(this).ajaxSubmit({
                url:url,
                type:'post',
                dataType:'json',
                /*���ﲻ��Ҫ��serialize()����ȡ�����ݲ�����Զ���ȡ*/
                success:function(data){
                    if(data.code==200){
                        location.href='/teacher/list';
                    }
                }
            });
          },

          /*��ʾ��Ϣ*/
          description:{
            tc_name/*�����������input��ߵ�data-description="tc_name"һ��*/:{
                required:'�������û���',/*����Ҳ�������div�����ʾ����*/
                valid:'�û�������ʹ��'
            },
              tc_pass:{
                  required:"����������",
                  pattern/*������������֤��Ӧ����input���data-pattern="^|d{6}$"*/:'���������6Ϊ����',
                  valid:'������Ч'
              },
              tc_join_date:{
                  required:"123",
                  valid:'������Ч'
              }
          }
      }) ;
    }
    //    /*�󶨰�ť����¼�*/
    //   $('#teacherBtn').click(function(){
    //       /*�󶨳ɹ�֮��������*/
    //       $.ajax({
    //           url:url,
    //           type:'post',
    //           data:$('#teacherForm').serialize(),
    //           dataType:'json',
    //           /*����ɹ���֮��*/
    //           success:function(data){
    //             if(data.code==200){
    //                 location.href='/teacher/list';
    //             }
    //           }
    //       });
    //   });
    //}
});