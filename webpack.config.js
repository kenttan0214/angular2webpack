var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    cache: true,
    devtool: 'source-map',
    entry: {
        polyfills: './src/polyfills',
        vendor: './src/vendor',
        main: './src/main'
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            loader: 'awesome-typescript-loader'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.html/,
            loader: 'html-loader'
        }, { 
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.(png|jpg|svg)$/,
            exclude: /node_modules/,
            loader: "url?limit=10000"
        }, {
            test: /\.eot(\?.*)?$/,
            loader: "file"
        }, {
            test: /\.(woff|woff2|woff\?.*|woff2\?.*)$/,
            loader: "url?prefix=font/&limit=5000"
        }, {
            test: /\.ttf(\?.*)?$/,
            loader: "url?limit=10000&mimetype=application/octet-stream"
        }, {
            test: /\.svg(\?.*)?$/,
            loader: "url?limit=10000&mimetype=image/svg+xml"
        }]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['polyfills', 'vendor', 'main'].reverse(),
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body',
            minify: {
                caseSensitive: true,
                collapseBooleanAttributes: true,
                collapseInlineTagWhitespace: false,
                collapseWhitespace: true,
                conservativeCollapse: false,
                decodeEntities: true,
                html5: true,
                includeAutoGeneratedTags: true,
                keepClosingSlash: true,
                minifyCSS: true,
                minifyJS: true,
                minifyURLs: ['data', 'javascript', 'mailto'],
                preserveLineBreaks: false,
                preventAttributesEscaping: false,
                processConditionalComments: false,
                processScripts: ['text/html'],
                removeAttributeQuotes: true,
                removeComments: true,
                removeEmptyAttributes: true,
                removeEmptyElements: false,
                removeOptionalTags: false,
                removeRedundantAttributes: false,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                removeTagWhitespace: false,
                sortAttributes: true,
                sortClassName: true,
                useShortDoctype: true
            },
            chunksSortMode: 'dependency',
            hash: true
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),        
    ],

    resolve: {
        extensions: ['', '.ts', '.js', '.json'],
        modulesDirectories: ['node_modules'],
        alias: {
			'assets': path.join(__dirname, 'src/app/assets'),
            'style':  path.join(__dirname, 'src/app/assets/less')
        }
    },

    devServer: {
        progress: true,
        hot: true,
        inline: false,
        port: 9900,
        contentBase: 'src',
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    },

    node: {
        global: true,
        process: true,
        Buffer: false,
        crypto: 'empty',
        module: false,
        clearImmediate: false,
        setImmediate: false,
        clearTimeout: true,
        setTimeout: true
    }
};
module.exports = config;