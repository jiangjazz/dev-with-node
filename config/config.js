//依据环境变量，加载不同配置
//目前有，development production
module.exports = require('./env/' + process.env.NODE_ENV+ '.js');