
	NProgress.start();

	NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	/*实现退出功能点击退出按钮删除cookieid*/
	$('#logoutBtn').click(function(){
		/*发送ajax请求*/
		$.ajax({
			/*请求接口*/
			url:'/api/logout',
			/*请求方式*/
			type:'post',
			dataType:'json',
			/*请求成功之后判断有没有cookieid如果有就删除跳转到登录页*/
			success:function(data){
				if(data.code==200){
					/*跳转到登录页*/
					location.href='/main/login'
				}
			}
		})
	})