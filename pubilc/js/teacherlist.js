define(['jquery', 'template','util', 'bootstrap'], function ($, template,util) {
    /*根据路径的地址高亮显示菜单*/
    util.setMenu(location.pathname);
    /*调用后台接口响应数据*/
    $.ajax({
        url: '/api/teacher',
        type: 'get',
        dataType: 'json',
        /*响应成功之后*/
        success: function (data) {
            /*解析数据渲染页面定义模板*/
            /*绑定数据与模板*/
            var html = template('teacherTpl', {list: data.result});
            /*渲染页面*/
            $('#teacherInfo').html(html);

            /*当页面渲染成功后之后给查看按钮绑定事件*/
            $('.preview').click(function () {
                /*得到当前点击的id*/
                var td = $(this).closest('td');
                var tcId = td.attr('data-tcId');
                /*根据id查数据渲染数据*/
                $.ajax({
                    url: '/api/teacher/view',
                    type: 'get',
                    dataType: 'json',
                    data: tcId,
                    success: function (data) {
                        /*解析数据渲染页面定义模板*/
                        /*绑定数据与模板*/
                        var html = template('modalTpl', data.result);
                        /*渲染页面*/
                        $('#modalInfo').html(html);
                        /* 显示弹窗*/
                        $('#teacherModal').modal();
                    }

                });
            });


            /*控制启用和注销*/
            $('.eod').click(function () {
                /*得到当前点击的id*/
                var td = $(this).closest('td');
                var tcId = td.attr('data-tcId');
                var tcStatus = td.attr('data-status');
                /*缓存this*/
                var that=this;
                $.ajax({
                    url: '/api/teacher/handle',
                    type: 'post',
                    data: {
                        tc_id: tcId,
                        tc_status: tcStatus
                    },
                    dataType:'json',
                    /*响应成功后*/
                    success:function(data){
                        console.log(data);
                        /*如果data响应成功后修改状态*/
                        if(data.code==200){
                            /*修改当前状态*/
                            td.attr('data-status',data.result.tc_status);
                        //    修改文字信息
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