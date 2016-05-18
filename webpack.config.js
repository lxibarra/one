var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool:'eval-source-map',
    entry:{
        main:[
            //'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './src/main.js'
        ]
    },
    output:{
        filename:'[name].js',
        path: path.join(__dirname, 'public'),
        publicPath:'/public/'
    },
    plugins:[
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders:[
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: ['es2015', 'stage-0', 'react'],
                    plugins: ['transform-decorators-legacy' ],
                }
           },
           {
                test:/\.scss$/,
                include: path.join(__dirname, 'src'),
                loader:  'null-loader'
           }
        ]
    }
};
