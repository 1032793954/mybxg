define(['jquery'],function($){
    return {
        /*��ȡ·���еĲ���·��*/
        setMenu:function(path){
            $('.navs a[href="'+path+'"]').addClass('active');
        },
        /*��ȡ·���е�ָ����ֵ�ʺ�֮ǰ·��֮��*/
        qs:function(key){
            var param=location.search.substring(1);
            var result=null;
            if(param){
                var kvs=param.split('&');
                $.each(kvs,function(i,item){
                   var kv=item.split('=');
                    if(key==kv[0]){
                        result=kv[1];
                        return false;/*��ֹѭ��*/
                    }
                });
            }
            return result;/*����ָ����ֵ*/
        }
    }
});
