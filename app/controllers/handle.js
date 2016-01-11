//公共模块引入
var fs = require('fs');

//参数变量
var page;  //页面文件



/**
 * [home 主页处理程序]
 * @param  {[type]} req []
 * @param  {[type]} res []
 * @return {[type]}     [无]
 */
exports.home = function(req, res){
    console.log('home');
    page = fs.readFileSync('public/views/index.html');
    res.writeHead(200, {'content-Type': 'text/html'});
    res.write(page);
    res.end();
};

/**
 * [other 其他处理程序]
 * @param  {[type]} req []
 * @param  {[type]} res []
 * @return {[type]}     [无]
 */
exports.other = function(req, res){
    console.log('other');
    res.writeHead(200, {'content-Type': 'text/plain'});
    res.end();
};


