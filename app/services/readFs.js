//公共模块引入
var fs = require('fs');

/**
 * [read 读取文件函数]
 * @param  {[type]}   url [读取路径]
 * @param  {Function} fn  [回调函数，读取成功后执行]
 * @return {[type]}       [无]
 */
exports.read = function(url, fn){
    fs.readFile(url, function(err, data){
        if(err){
            console.log('app/services/readFs.js \n读取文件时报错,详细错误：\n'+err);
        }else{
            console.log(data);
            //用回调函数吧读取的字符传出
            fn(data);
        }
    })
};

/**
 * [write 写入文件函数]
 * @param  {[type]}   url  [写入路径]
 * @param  {[type]}   data [写入数据]
 * @param  {Function} fn   [回调函数，写入成功后执行]
 * @return {[type]}        [无]
 */
exports.write = function(url, data, fn){
    fs.appendFile(url, data, function(){
        if(err){
            console.log('app/services/readFs.js \n写入文件时报错。详细错误：\n'+err);
        }else{
            console.log('写入文件成功');
            //用回调函数吧读取的字符传出
            fn(data);
        }
    })
};