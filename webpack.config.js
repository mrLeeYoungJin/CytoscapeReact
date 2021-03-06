const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

const GLOBALS = {
		'process.env.NODE_ENV': JSON.stringify('production'),
		__DEV__: false
	};

module.exports = {
	entry: [
        './src/index'
    ],
    cache: true,
    debug: false,
    output: {
        path: __dirname + '/public/',
        publicPath: '/',
        filename: 'bundle.js'
    },
    
    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        // Define production build to allow React to strip out unnecessary checks
        new webpack.DefinePlugin(GLOBALS),
        
        // css 파일 단일화 plugin
        new ExtractTextPlugin('[name].[contenthash].css'),
        
        //webpack의 output의 filename에 정의한 이름대로 dist에 새롭게 생성되는 index 파일에 js 파을을 추가
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public/index.html'),
            minify: {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true
            },
            inject: true
        }),
        
        // Minify the bundle
        new webpack.optimize.UglifyJsPlugin({
        	minimize: true,
        	compress: {
        		// suppresses warnings, usually from module minification
        		warnings: false,
        	},
        }),
        
        // Minify the bundle
        //new webpack.optimize.UglifyJsPlugin(),
        // Allows error warnings but does not stop compiling.
        new webpack.NoErrorsPlugin(),
        //new WriteFilePlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.css'],
        root: path.join(__dirname, 'src')
    },
    module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        cacheDirectory: true,
                        presets: ['es2015', 'react']
                    }
                },
                {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'url?name=[name].[ext]'},
                {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000&mimetype=application/font-woff&name=[name].[ext]"},
                {test: /\.ttf(\?v=\d+.\d+.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream&name=[name].[ext]'},
                {test: /\.svg(\?v=\d+.\d+.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml&name=[name].[ext]'},
                {test: /\.(jpe?g|png|gif)$/i, loader: 'file?name=[name].[ext]'},
                {test: /\.ico$/, loader: 'file?name=[name].[ext]'},
                {test: /(\.css|\.scss)$/, loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')}
                //{test: /(\.css|\.scss)$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap']}
            ]
        }
};