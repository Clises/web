var http=require('http');
var url=require('url');
//2.用http模块创建服务
/*
 req获取url信息   （request）
 res 浏览器返回响应信息 （response）
 * */
http.createServer(function(req,res){
//输入http://localhost:8001/news?aid=123   拿到aid
// 输入http://localhost:8001/news?aid=123&cid=3   拿到aid 和cid
//req.url  获取浏览器url输入的信息
    //var query=url.parse(req.url,true);
    //console.log(query);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<head><meta charset="utf-8"/></head>');
    if(req.url!='/favicon.ico'){
        //http://localhost:8001/news?aid=123
        //console.log(req.url);  //返回  /news?aid=123
        var result=url.parse(req.url,true);  //第一个参数是地址    第二个参数是true的话表示把get传值转换成对象
        console.log('aid='+result.query.aid);  /*获取url的get传值*/
        console.log('cid='+result.query.cid);
    }
    res.write('你好 nodejs是是是是111');
    res.end(); /*结束响应*/
}).listen(8008);
