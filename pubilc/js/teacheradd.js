define(['jquery','template','util','datepicker','language','validate','form'],function($,template,util){
    /*设置菜单选中*/
    util.setMenu('/teacher/list');
    /*获取编辑的讲师id*/
    var tcId=util.qs('tc_id');
    if(tcId){
        /*编辑操作*/
        $.ajax({
            url:'/api/teacher/edit',
            type:'get',
            dataType:'json',
            data:{tc_id:tcId},
            success:function(data){
                data.result.operate='编辑讲师';
                /*解析数据渲染模板*/
                /*绑定数据与模板*/
                var html=template('teacherTpl',data.result);
                /*渲染页面*/
                $('#teacherInfo').html(html);

                /*提交编辑讲师表单*/
                submitForm('/api/teacher/update');

            }
        });
    }else{
        /*添加操作*/
        var html=template('teacherTpl',{operate:'添加讲师',tc_gender:1});
        /*渲染页面*/
        $('#teacherInfo').html(html);

        /*提交添加讲师表单*/
        submitForm('/api/teacher/add');
    }



    /*提交表单公用方法设置按钮点击事件和表单验证*/
    function submitForm(url){
      $('#teacherForm').validate({/*给form添加一个validate方法*/
          sendForm:false,/*阻止表单验证*/
          valid:function(){
          /*这里提交表单使用提交表单插件*/
            $(this).ajaxSubmit({
                url:url,
                type:'post',
                dataType:'json',
                /*这里不需要用serialize()来获取表单数据插件会自动获取*/
                success:function(data){
                    if(data.code==200){
                        location.href='/teacher/list';
                    }
                }
            });
          },

          /*提示信息*/
          description:{
            tc_name/*这里的命名跟input里边的data-description="tc_name"一样*/:{
                required:'请输入用户名',/*这里也可以添加div添加提示文字*/
                valid:'用户名可以使用'
            },
              tc_pass:{
                  required:"请输入密码",
                  pattern/*这里是正则验证对应的是input里的data-pattern="^|d{6}$"*/:'密码必须是6为数字',
                  valid:'密码有效'
              },
              tc_join_date:{
                  required:"123",
                  valid:'日期有效'
              }
          }
      }) ;
    }
    //    /*绑定按钮点击事件*/
    //   $('#teacherBtn').click(function(){
    //       /*绑定成功之后发送请求*/
    //       $.ajax({
    //           url:url,
    //           type:'post',
    //           data:$('#teacherForm').serialize(),
    //           dataType:'json',
    //           /*请求成功后之后*/
    //           success:function(data){
    //             if(data.code==200){
    //                 location.href='/teacher/list';
    //             }
    //           }
    //       });
    //   });
    //}
});