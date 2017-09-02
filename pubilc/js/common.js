define(['jquery','template','cookie'],function($,template){
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

	//验证是否登陆过如果没有登陆则跳转到登录页
	var sessionId= $.cookie('PHPSESSID');
	if(!sessionId&&location.pathname!='/main/login'){
		/*不存在的话冲洗跳转到登录页*/
		location.href='/main/login';
	}

	//	获取登录信息
	var loginInfo= $.cookie('loginInfo');
	var info=loginInfo?JSON.parse(loginInfo):{};
	//登陆模板之后的侧边栏模板
	var tpls='<div class="avatar img-circle"><img src="{{tc_avatar}}"></div><h4>{{tc_name}}</h4>';
	/*绑定模板与数据*/
	var html=template.render(tpls,info);
	/*放入div*/
	$('.aside .profile').html(html);


    //同步首页的登陆头像和名字
    //$('.profile img').attr('src',info.tc_avatar);
    //$('.profile h4').html(info.tc_name);
});





