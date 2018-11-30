const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const path = require('path');
const config = require('./webpack.config');

const devServer = {
   hot: true,
   historyApiFallback: true,
   watchContentBase: true
};

const port = process.env.PORT || 4000;
const ip = process.env.IP || '0.0.0.0';
new WebpackDevServer(webpack(config), devServer).listen(port, ip, function (err) {
    if(err) {
        return console.log(err);
    }

    console.log('Listening at ' + ip + ':' + port);
});
