webpack


## 1.环境搭建 
全局安装
npm install --global webpack

## 2.搭建 webpack 项目
创建文件夹：
mkdir webpack-first && cd webpack-first

初始化：
npm init -y 初始化

安装 cli：
npm install webpack webpack-cli --save-dev

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

  第一个 test
  webpack-my 下新建目录 src，src 下新建 index.js文件
  运行：npm run build
  此时会在主目录下新增一个 dist 的文件夹目录，里面的 main.js 就是打包好的文件




webpack 配置流程  
  在开发中打包src下文件包括
    发布时需要的 html src js
    css预编译器stylus，less，sass
    es6的高级语法
    图片资源.png，.gif，.ico，.jpg
    文件间的require
    别名@等修饰符
    
###webpack 中webpack.config.js的配置

### Html在webpack中的配置
在开发环境中安装html-webpack-plugin
  npm i --save-dev html-webpack-plugin

```javascript

```



webpack dev server


