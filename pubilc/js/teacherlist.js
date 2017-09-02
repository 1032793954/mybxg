define(['jquery','template'],function($,template){
    /*调用后台接口响应数据*/
    $.ajax({
       url:'/api/teacher',
        type:'get',
        dataType:'json',
        /*响应成功之后*/
        success:function(data){
            /*解析数据渲染页面定义模板*/
            /*绑定数据与模板*/
            var html=template('teacherTpl',{list:data.result});
            /*渲染页面*/
            $('#teacherInfo').html(html);
        }
    })
});