define(['jquery'],function($){
    return {
        setMenu:function(path){
            $('.navs a[href="'+location.pathname+'"]').addClass('active');
        }
    }
});
