define(['jquery'],function($){
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

});





