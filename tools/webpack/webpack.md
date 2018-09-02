webpack是当下最热门的模块化管理工具，使用webpack可以对模块进行压缩、预处理、按需打包、按需加载等等。



## 环境搭建 
全局安装
npm install --global webpack
安装报错处理： SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\webpack\node_modules\fsevents):
 fsevent是mac osx系统的  在windows下安装证明已经安装成功。

## 搭建 webpack 项目
创建文件夹：
mkdir template && cd template

## 初始化：(生成package.json)
npm init -y 初始化

## 安装 cli：（webpack命令行接口）
npm install webpack webpack-cli --save-dev

## (安装小型的Node.js Express服务器)
npm install webpack-dev-server --save-dev

## 创建入口文件
mkdir src && cd src
mkdir main.js 

## 相关环境
**打包后悔自动生成dist文件夹，以及dist下main.js文件（mode是webpack4独有）**
开发环境下:webpack --mode=development
生产环境下:webpack --mode=production

### 局部安装(安装到开发环境)
npm install webpack webpack-cli webpack-dev-server







## 基础配置
**新建config配置文件夹，新建webpack.dev.js**
```
touch config/webpack.dev.js
rm dist/main.js src/index.js
touch src/main.js
```

**config/webpack.dev.js**
```
#config/webpack.dev.js
const path = require("path")
module.exports = {
    //入口（一个或多个）
    entry:{
        //main:["other.js","./src/main.js"]
        main:"./src/main.js"
    },
    //打包环境：development & production
    mode:"development",
    //出口只有一个
    output:{
        filename: "[name].bundle.js",
        path: path.resolve(__dirname,"../dist"),
        //根路径
        publicPath: "/"
    }
}
```

**进行打包**
```
webpack --config=config/webpack.dev.js
#启动服务（Project is running at http://localhost:8080/）
webpack-dev-server --config=config/webpack.dev.js
```

**配置package.json简化命令行**
```
"start":"webpack-dev-server --config=config/webpack.dev.js",
"build":"webpack --config=config/webpack.dev.js"

```

**打包重启**
```
 #打包
 npm run build
 #重启
 npm start
```

## 配置本地服务器（设置默认页面为dist里面的内容）
**config/webpack.dev.js**
```
#config/webpack.dev.js
devServer:{
    contentBase:"dist"，
        overlay:true //错误信息同步
}
```

加载CSS并在mine.js中引入文件
```
#生成一个css文件
touch src/main.css

#src/main.css
body{background-color:blueviolet;color:#fff;}

# src/main.js（引入css文件）
require("./main.css")
```
创建html文件
```
# dist/index.html
<div>hello</div>
<script src="main.bundle.js"></script>
```


## 配置css
**下载css加载器**
npm install style-loader css-loader
**配置css loaders**
```
#config/webpack.dev.js
module:{
    rules:[
        //css loaders
        {
            test:/\.css$/,
            use:["style-loader","css-loader"]
        }
    ]
}
```
重新启动（只要webpack.config.js文档有变动就需要重启，并刷新页面）
npm start


## 配置html，下载加载器
```
npm install html-loader extract-loader file-loader
```

**配置html loaders**
```
# webpack.dev.js
{
    test:/\.html$/,
    use:["file-loader?name=[name].html","extract-loader","html-loader"]
    //使用顺序从后往前
    //1.html-loader找到html文件
    //2.extract-loader将index.html跟生成的bundle.js进行分割
    //3.file-loader为加载的文件起名字
}
##另外的的编译方式
{
    test:/\.html$/,
    use: [
        {
            loader: "file-loader",
            option: {
                name: "[name].html"
            }
        },
        {
            loader: "extract-loader"
        },
        {
            loader: "html-loader"
        }
    ]
}
```
**删除dist中的文件，打包重启。**


## 加载器图片（在src中添加images文件用于存放图片）
在src文件中构建images文件夹用于存放图片
**下载url加载器**
```
npm install url-loader 
```
**配置image loaders**
```
#webpack.dev.js
{
    //匹配到.jpg|png|svg|gif结尾的文件
    test:/\.(jpg|png|svg|gif)$/,
    //多个loader需要从后到前进行解析(大于10kb打包)
    use:["url-loader?limit=10&name=images/[name]-[hash:8].[ext]"]
}
```
**打包重启**



## 加载js
使用babel转换JS
```
# src/main.js 
var a = () => {
    console.log("one more time")
}
```
下载
```
#安装babel-core
npm install babel-core
#生成.babelrc文件( babelrc文件的本质是json ,rc为自动加载的文件)

touch .babelrc

#下载库，将ES6转为ES5
npm install babel-plugin-transform-es2015-arrow-functions
复制
```
**配置.babelrc 文件**
```
#.babelrc
{
    "plugins":[
        "transform-es2015-arrow-functions"
    ]
}
```

##安装babel
sudo npm install babel-cli -g

##main.js使用babel
babel src/main.js

#安装babel-loader
npm install babel-loader

## 配置JS loaders
```
#  webpack.dev.js
{
    test:/\.js$/,
    use:["babel-loader"],
    //排除node_modules中的JS文件
    exclude:/node_modules/
}
```

## 删除dist下的文件打包重启
更好的解决JS语法：polyfill / preset / transform
```
# src/main.js
var a = async () => {
    await console.log("one more time");
    console.log('two')
}

#.babelrc 
{
    "plugins":[
        "transform-es2015-arrow-functions",
        "async-to-promises"
    ]
}

```
#将async转为promise
npm install babel-plugin-async-to-promises

#main.js使用babel
babel src/main.js

polyfill会在预编译之前编译指定的东西(缺点：生成环境变量的污染)

#安装polyfill
npm install babel-polyfill

#配置JS loaders
```
#  webpack.dev.js
entry:{
    main:["babel-polyfill","./src/main.js"]
}

```
babel-polyfill中选择对应的内容转化指定的语法(观察main.bundel.js的大小)
```
entry:{
    main:["core-js/fn/promise","./src/main.js"]
},
```

##比polyfill更好的方式：安装环境变量
npm install babel-preset-env

```
#.babelrc
{
   "presets":[
       [
            #配置环境自动下载对应的插件
            "env",
            {
                "tartgets":{
                #配置浏览器的版本号
                    "browsers":["last 2 versions"]
                },
                "debug":true
            }
       ]
   ],
   "plugins":[
        #识别最新语法，解决环境污染
        "transform-runtime"
    ]
}
```

##安装插件：transform-runtime
npm install babel-plugin-transform-runtime
```
# main.js
require("babel-runtime/regenerator")
require("./main.css")
require("./index.html")
var a = async args  => {
    const {a, b} = args
    await console.log("one more time", a, b);
    console.log('two')
}
a({a:12,b:23});

```
##main.js使用babel
babel src/main.js  




搭建脚手架用于启动服务

##安装express
npm install express

##创建server文件夹用于启动服务
mkdir src/server

##创建入口文件和配置服务器的文件
touch src/server/main.js src/server/express.js

##package.json添加dev(用node启动main.js )
"dev":"node src/server/main.js"

##src/server/main.js
```
//将ES6转为ES5
require("babel-register")
//执行express文件
require("./express")
```

##src/server/express.js
```
//启动一个服务器
import express from 'express';
import path from 'path';
//创建服务器
const server = express()
//监听端口号 8080
server.listen(8080,() => {
    console.log("server is running...")
})

```
## 配置服务启动页面
###监听代码
npm install webpack-dev-middleware

# src/server/express.js
  ```
//启动一个服务器
import express from 'express';
import path from 'path';

//创建服务器
const server = express()
//配置启动路径
const staticMiddleware = express.static("dist")
//监听代码
const webpack = require("webpack")
const config = require("../../webpack.dev")
//使用webpack把config传进去作为实例
const compiler = webpack(config)
//使用下载的webpack-dev-middleware
const webpackDevMiddleware = require("webpack-dev-middleware")(compiler,config.devServer)
//【运行】server
server.use(webpackDevMiddleware)
// 【使用路径】
server.use(staticMiddleware)
//监听端口号 8080
server.listen(8080,() => {
    console.log("server is running...")
})
```

npm run dev

## 前端热更新
npm install webpack-hot-middleware   

```
# src/server/express.js //【使用热更新】在【运行】之后，【使用路径】之前
//热更新
const webpackHotMiddleware = require("webpack-hot-middleware")(compiler)
//【使用热更新】
server.use(webpackHotMiddleware)
```
##热更新配置
**webpack.dev.js**
```
//引入webpack
const webpack = require('webpack');
//添加
module.exports = {
    devServer:{
        //热更新
        hot:true,
    },
    //插件
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
」
# src/main.js
require("webpack-hot-middleware/client")
```

##后端热更新
**安装全局的nodemon进行监听(后端)**
sudo npm install nodemon -g

**配置监听**
```
#package.json#pac 
"dev":"nodemon --watch config --watch src/server src/server/main.js" 
```

**服务端热更新**
```
#服务端监听,安装插件
npm install html-webpack-plugin
```

**配置后端热更新**
```
# webpack.dev.js
//引入html-webpack-plugin，并且生成实例
const HTMLWebpackPlugin = require("html-webpack-plugin");
//更改html loaders,去除和"html-webpack-plugin"插件功能中相同的部分
{
    test: /\.html$/,
    use:["html-loader"]
}
//插件
plugins:[
        new webpack.HotModuleReplacementPlugin(),
        //添加插件HTMLWebpackPlugin
        new HTMLWebpackPlugin({
            template:"./src/index.html"
        })
    ]

# src/main.js
require("webpack-hot-middleware/client?reload=true")
```

##优化热更新重复编译和动态创建文件的问题
npm install webpack-mild-compile
```
# src/server/express.js  
require("webpack-mild-compile")
```
借助webpack、node.js、浏览器实现调试
#package.json
"dev":"nodemon --inspect --watch config  --watch src/server src/server/main.js 




## 自动处理css3前缀
安装postcss-loader 和autoprefixer
npm install --save-dev postcss-loader autoprefixer

根目录新建postcss.config.js
touch postcss.config.js




































## package.json
**不能再package.json中天剑注释，否则会失效**
### 运行
scripts:{
"dev":"webpack --mode development",
 "build":"webpack --mode production"
}

### 自动处理css3前缀
安装postcss-loader 和autoprefixer
npm install --save-dev postcss-loader autoprefixer

### 消除未使用的CSS
安装PurifyCSS-webpack
npm install --save-dev purifycss-webpack purify-css













