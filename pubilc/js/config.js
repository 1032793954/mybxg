require.config({
    baseUrl: '/pubilc/assets',
    paths: {
        jquery: '/pubilc/assets/jquery/jquery',
        cookie: '/pubilc/assets/jquery-cookie/jquery.cookie',
        template: '/pubilc/assets/artTemplate/template-web',
        bootstrap: '/pubilc/assets/bootstrap/js/bootstrap.min',
        datepicker: '/pubilc/assets/bootstrap-datepicker/js/bootstrap-datepicker',
        language: '/pubilc/assets/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        validate: '/pubilc/assets/validate/jquery-validate',
        form:'/pubilc/assets/jquery-form/jquery.form',
        common: '../js/common',
        login: '../js/login',
        index: '../js/index',
        teacherlist: '../js/teacherlist',
        util: '../js/util',
        teacheradd: '../js/teacheradd'
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        },
        language: {
            deps: ['jquery', 'datepicker']
        },
        validate: {
            deps: ['jquery']
        }
    }
});