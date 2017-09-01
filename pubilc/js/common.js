define(['jquery'],function($){
	/*控制左侧菜单的展开与折叠*/
	//NProgress.start();
	//NProgress.done();
	//控制左侧菜单的折叠功能
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	/*实现退出功能点击退出按钮删除cookieid*/
	$('#logoutBtn').click(function(){
		/*发送ajax请求*/
		$.ajax({
			/*请求方式*/
			type:'post',
			/*请求接口*/
			url:'/api/logout',
			dataType:'json',
			/*请求成功之后判断有没有cookieid如果有就删除跳转到登录页*/
			success:function(data){
				if(data.code==200){
					/*跳转到登录页*/
					location.href='/main/login'
				}
			}
		});
	});

});





