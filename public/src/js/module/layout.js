//

//方法函数
var actions = {
    /*头部功能*/
    //切换显示菜单导航
    showNav: function(){
        $('.header-collgroup').toggleClass('active');
    }
};
//调用
$(function(){
    /*头部功能*/
    //切换显示菜单导航
    $('.header-collaspe').click(actions.showNav);
});


//暴露接口
module.export = function(){};