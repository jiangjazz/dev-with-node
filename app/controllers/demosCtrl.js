//公共模块引入
var fs = require('fs');

//参数变量
var page;  //页面文件



exports.demo1 = function(req, res){
    console.log('demo1');
    page = fs.readFileSync('public/views/demo/demo1.html');
    res.writeHead(200, {'content-Type': 'text/html'});
    res.write(page);
    res.end();
};

exports.demo2 = function(req, res){
    console.log('demo2');
    page = fs.readFileSync('public/views/demo/demo2.html');
    res.writeHead(200, {'content-Type': 'text/html'});
    res.write(page);
    res.end();
};
exports.demo3 = function(req, res){
    console.log('demo3');
    page = fs.readFileSync('public/views/demo/demo3.html');
    res.writeHead(200, {'content-Type': 'text/html'});
    res.write(page);
    res.end();
};