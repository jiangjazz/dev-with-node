
//私有模块引入
var handles = require('../controllers/handle'),
    demo = require('../controllers/demosCtrl');

module.exports = function(app){
    var demoIndex = 1;
    app.get('/', handles.home)
        .post('/', handles.home);

    while(demoIndex < 2){
        app.get('/demo'+demoIndex, demo['demo'+demoIndex])
        demoIndex ++;
    };

};