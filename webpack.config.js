const prod = process.argv[3];
if (prod === 'development') {
    module.exports = require('./webpack.developer');
} else if(prod === "none") {
    module.exports = require('./webpack.production-dev');
}else{
    module.exports = require('./webpack.production');
}

