1. 包
    Nodejs 中除了它自己提供的核心模块外，我们可以自定义模块，也可以使用 第三方的模块。Nodejs
 中第三方模块由包组成，可以通过包来对一组具有相互依 赖关系的模块进行统一管理。
 
2. npm
npm 是世界上最大的开放源代码的生态系统。可以通过 npm 下载各种各样的包，
这些源代码(包)我们可以在 https://www.npmjs.com 找到。
npm 是随同 NodeJS 一起安装的包管理工具，能解决 NodeJS 代码部署上的很多问题，
常见的使用场景有 以下几种:
(1) 允许用户从 NPM 服务器下载别人编写的第三方包到本地使用。(silly-datetime)
(2) 允许用户从 NPM 服务器下载并安装别人编写的命令行程序(工具)到本地使用。 (supervisor)
(3) 允许用户将自己编写的包或命令行程序上传到 NPM 服务器供别人使用。

3. 常用命令
（1）npm -v 查看 npm 版本
（2）使用 npm 命令安装模块
（3）npm uninstall moudleName 卸载模块 删除文件夹也可以
（4）npm list 查看当前目录下已安装的 node 包
（5）npm info jquery 查看 jquery 的版本
（6）指定版本安装 npm install jquery@1.8.0


4. package.json
 定义了这个项目所需要的各种模块,以及项目的配置信息(比如名称、
版本、许可证等元数据)

 (1)创建 package.json
  npm init (自己定义创建)
  npm init –yes （如果出现中文或者空格会报错）

（2）package.json 文件
```json
 {
"name": "test", "version": "1.0.0", "description": "test",
"main": "main.js", "keywords": [
"test" ],
"author": "wade",
"license": "MIT",
 "dependencies": {
"express": "^4.10.1" },
"devDependencies":{
"jslint": "^0.6.5" }
}
```
安装模块并把模块写入 package.json(依赖)

npm install babel-cli --save-dev
  npm install 模块 --save

5. dependencies 与 devDependencies 之间的区别?
使用 npm install node_module –save 自动更新 dependencies 字段值;
使用 npm install node_module –save-dev 自动更新 devDependencies 字段值;


dependencie：配置当前程序所依赖的其他包
devDependencie：配置当前程序所依赖的其他包，只会下载模块，不下载模块的测试和文档框架

6. 关于版本号之前的符号问题
"dependencies": {
"ejs": "^2.3.4", "express": "^4.13.3", "formidable": "^1.0.17"
 
}
^表示第一位版本号不变，后面两位取最新的 ~表示前两位不变，最后一个取最新 *表示全部取最新


7. 安装淘宝镜像

npm install -g cnpm --registry=https://registry.npm.taobao.org







