webpack


## 环境搭建 
全局安装
npm install --global webpack

## 搭建 webpack 项目
创建文件夹：
mkdir webpack-first && cd webpack-first

## 初始化：
npm init -y 初始化

## 安装 cli：
npm install webpack webpack-cli --save-dev

## 服务和热更新
npm install webpack-dev-server --save-dev

## 创建入口文件
mkdir src && cd src
mkdir index.js 示例

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



npm run dev 开发环境
npm run build 运行环境


## 
 







 创建目录结构、文件、内容
   webpack-first
   |- package.json
 + |- index.html
 + |- /src
 +   |- index.js

配置文件内容
src/index.js
```javascript
import _ from 'lodash'
function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
```



index.html
```html
<!doctype html>
<html>
  <head>
    <title>起步</title>
    <script src="https://unpkg.com/lodash@4.16.6"></script>
  </head>
  <body>
    <script src="./src/index.js"></script>
  </body>
</html>
```

package.json配置
**调整 package.json文件，确保安装包是私有的，移除 mian 入口文件，防止意外发布代码。**

创建bundle文件

安装lodash打包依赖
  npm install --save lodash

在 index.js中引入
```javascript
import _ from 'lodash'
function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
```
  
## 3.部署 webpack
  配置package.json
 ```json
  "scripts": {
    "build": "webpack --mode production" //在这里配置，就可以使用npm run build 启动我们的webpack
  },
  "devDependencies": {
    "webpack": "^4.16.0",
    "webpack-cli": "^3.0.8"
  }
```




### Html在webpack中的配置
在开发环境中安装html-webpack-plugin
  npm i --save-dev html-webpack-plugin

```javascript


```


