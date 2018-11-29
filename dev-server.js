const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const path = require('path');
const config = require('./webpack.config');


const port = process.env.PORT || 4000;
const ip = process.env.IP || '0.0.0.0';
new WebpackDevServer(webpack(config), {
    historyApiFallback: true,
    hot: true,
    inline: true,
    contentBase: path.join(__dirname, 'src')
}).listen(port, ip, function (err) {
    if(err) {
        return console.log(err);
    }

    console.log('Listening at ' + ip + ':' + port);
});
