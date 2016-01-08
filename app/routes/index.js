
//私有模块引入
var handles = require('../controllers/handle');

module.exports = function(app){
    app.get('/', handles.home);


};