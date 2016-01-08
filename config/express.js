//公共模块引入
var config = require('./config'), //依据环境变量 引入配置
    http = require('http'),
    express = require('express'),
    morgan = require('morgan'), //日志功能
    compress = require('compression');  //压缩资源

//页面公用变量
var app = express(),
    server; //http服务


module.exports = function(){

    //创建服务
    server = http.createServer(app);

    if(process.env.NODE_ENV === 'development'){
        //生产环境配置
        //资源加载日志功能
        app.use(morgan('dev'));
    }else if(process.env.NODE_ENV === 'production'){
        //线上环境配置
        //压缩功能
        app.use(compress());
    }

    //路由处理文件
    require('../app/routes/index.js')(app);

    //设置静态资源文件夹
    app.use(express.static('./public'));
    return app;
};