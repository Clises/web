
//1. 引入http模块
var httpModule=require('http')
//2.http创建服务
/**
* req获取url信息
* res 浏览器返回的信息
* */
httpModule.createServer(function (req, res) {
/**
* 发送HTTP头部
* HTTP状态值：200；ok
* 设置HTTP头部，状态码200，文件类型 html 字符集 utf-8
 *
* */
res.writeHead(200,{"Content-Type":"text/html;charset='utf-8"})
res.write('hello world');
    res.end();//相应结束
}).listen(8083);



