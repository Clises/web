一、第一个 node 应用:
  1. 引入http模块
  2. 创建http服务器
使用 http.createServer() 方法创建服务器，并使用 listen 方法绑定 8888 端口。 函数通过 request, response 参数来接收和响应数据

```
var http = require('http'); http.createServer(function (request, response) {
// 发送 HTTP 头部
// HTTP 状态值: 200 : OK
//设置 HTTP 头部，状态码是 200，文件类型是 html，字符集是 utf8 response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
// 发送响应数据 "Hello World"
res.end("哈哈哈哈，我买了一个 iPhone" + (1+2+3) + "s"); }).listen(8888 );
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
```
3. 运行程序

http 模块使用

```
//引用模块
var http = require("http");
//创建一个服务器，回调函数表示接收到请求之后做的事情
var server = http.createServer(function(req,res){ //req 参数表示请求，res 表示响应
console.log("服务器接收到了请求" + req.url);
res.end(); // End 方法使 Web 服务器停止处理脚本并返回当前结果
});
//监听端口
server.listen(3000,"127.0.0.1");
```
设置一个响应头:
res.writeHead(200,{"Content-Type":"text/htm l;c harset=UTF8"});
此时最关键的 req.url 属性,表示用户的请求 URL 地址。所有的路由设计，都是通过 req.url 来实现


url 模块使用
```
url.parse() 解析 URL
url.format(urlObject) //是上面 url.parse() 操作的逆向操作
url.resolve(from, to) 添加或者替换地址
```

node自动启动工具supervisor
安装


