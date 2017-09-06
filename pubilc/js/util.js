define(['jquery'],function($){
    return {
        /*获取路径中的部分路径*/
        setMenu:function(path){
            $('.navs a[href="'+path+'"]').addClass('active');
        },
        /*获取路径中的指定的值问号之前路径之后*/
        qs:function(key){
            var param=location.search.substring(1);
            var result=null;
            if(param){
                var kvs=param.split('&');
                $.each(kvs,function(i,item){
                   var kv=item.split('=');
                    if(key==kv[0]){
                        result=kv[1];
                        return false;/*终止循环*/
                    }
                });
            }
            return result;/*返回指定的值*/
        }
    }
});
