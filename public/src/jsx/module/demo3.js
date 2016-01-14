//引入所有组件
var component = require('./component')();
//单选框组件
var page = function(){
    //设置需要的组件
    var radiosComponent = component.radiosComponent;
    //参数
    var arrayOfChoices = ['男性', '女性', '中性'],
        props = {
            'label': '当前选择的',
            'choices': arrayOfChoices,
            'value': ''
        };
    //调用
    radiosComponent(props, document.querySelector('.radioBox'));
};


//依据模块加载
document.querySelector('.demo3-module') && page();
module.exports = function(){};