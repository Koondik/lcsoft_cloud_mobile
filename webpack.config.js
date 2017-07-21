var path = require('path');  // NodeJS中的Path对象，用于处理目录的对象，提高开发效率。
var webpack = require('webpack');
var px2rem = require('postcss-px2rem');
var postcssImport = require('postcss-import'); //对根css或scss文件的@import引用文件一样能够进行autoprefixer

module.exports = {
    entry : './src/main.js',     // 入口文件地址，不需要写完，会自动查找
    output : {
        path : path.resolve(__dirname, './dist'),   // 文件地址，使用绝对路径形式
        publicPath : 'dist/',   // 公共文件生成的地址
        filename : 'build.js'   //[name]这里是webpack提供的根据路口文件自动生成的名字
    },
    module : {
        rules : [
            {   // 解析.vue文件
                test : /\.vue$/,
                use:[
                    {
                        loader : 'vue-loader',
                        options : {
                            loaders : {
                                // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                                // the "scss" and "sass" values for the lang attribute to the right configs here.
                                // other preprocessors should work out of the box, no loader config like this necessary$('.')
                                'scss' : 'vue-style-loader!css-loader!sass-loader',
                                'sass' : 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                            }
                             // other vue-loader options go here
                        }
                    }
                ]
            },
            {
                test : /\.js$/,
                loader : 'babel-loader',
                exclude : /node_modules/
            },
            {
                test : /\.(png|jpg|gif|svg)$/,
                loader : 'file-loader', // 资源的引用要用相对路径，否则不能打包资源
                options : {
                    name : 'static/images/[name].[ext]?[hash]'
                }
            },
            {
                test : /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
                    //         plugins: (loader) => [
                    //                 require('postcss-px2rem')({remUnit: 75}),
                    //                 require('postcss-import')({root: loader.resourcePath}),
                    //                 require('autoprefixer')({ browsers: ['ie>=8', '>1% in CN']}), //CSS浏览器兼容
                    //                 require('cssnano')()  //压缩css
                    //         ]
                    //     }
                    // }
                ]

            },
            {
                test : /\.scss$/,
                use : [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
                            plugins: (loader) => [
                                require('postcss-px2rem')({remUnit:16}),
                                require('postcss-import')({root: loader.resourcePath}),
                                require('autoprefixer')({ browsers: ['ie>=8', '>1% in CN']}), //CSS浏览器兼容
                                require('cssnano')()  //压缩css
                            ]
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test : /\.(woff|woff2|svg|eot|ttf)\??.*$/,
                loader : 'file-loader?name=./static/fonts/[name].[ext]'
            }
        ]
    },
    resolve : {
        alias : {
            'vue' : 'vue/dist/vue.js'
        }
    },
    devServer : {
        historyApiFallback : true,
        noInfo : true
    },
    performance : {
        hints : false
    },
    devtool : '#eval-source-map',
    // plugins: [
    //     new webpack.LoaderOptionsPlugin({   //使用postcss插件
    //         options: {
    //             postcss: function (webpack) {
    //                 return [
    //                     postcssImport({
    //                         addDependencyTo: webpack
    //                     }),
    //                     require("autoprefixer")({
    //                         browsers: ['ie>=8', '>1% in CN']
    //                     })
    //                 ]
    //             }
    //         }
    //     })
    // ],
};

if(process.env.NODE_ENV === 'production'){
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env' : {
                NODE_ENV : '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap : true,
            compress : {
                warnings : false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize : true
        })
    ])
}
