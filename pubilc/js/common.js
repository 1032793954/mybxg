define(['jquery','cookie'],function($){
	/*�������˵���չ�����۵�*/
	//NProgress.start();
	//NProgress.done();
	//�������˵����۵�����
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	/*ʵ���˳����ܵ���˳���ťɾ��cookieid*/
	$('#logoutBtn').click(function(){
		/*����ajax����*/
		$.ajax({
			/*����ʽ*/
			type:'post',
			/*����ӿ�*/
			url:'/api/logout',
			dataType:'json',
			/*����ɹ�֮���ж���û��cookieid����о�ɾ����ת����¼ҳ*/
			success:function(data){
				if(data.code==200){
					/*��ת����¼ҳ*/
					location.href='/main/login'
				}
			}
		});
	});

	//��֤�Ƿ��½�����û�е�½����ת����¼ҳ
	var sessionId= $.cookie('PHPSESSID');
	if(!sessionId&&location.pathname!='/main/login'){
		/*�����ڵĻ���ϴ��ת����¼ҳ*/
		location.href='/main/login';
	}

//	��ȡ��¼��Ϣ
	var loginInfo= $.cookie('loginInfo');
	var info=JSON.parse(loginInfo);
	$('.profile img').attr('src',info.tc_avatar);
	$('.profile h4').html(info.tc_name);
});





