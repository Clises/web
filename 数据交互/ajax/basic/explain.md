#1.什么是 ajax?     
-Asynchronous Javascript And XML （异步的JavaScript和XML） 
它并不是一种单一的技术，而是有机利用一系列交互式网页应用相关的技术所形成的结合体
AJAX 是一种用于创建快速动态网页的技术。通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。
这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。

##1.1ajax 有哪些优缺点

优点:页面无刷新，用户体验好。
   异步通信，更加快的响应能力。
   减少冗余请求，减轻了服务器负担
   基于标准化的并被广泛支持的技术，不需要下载插件或者小程序
缺点:
    ajax干掉了back按钮，即对浏览器后退机制的破坏。
    存在一定的安全问题。
    对搜索引擎的支持比较弱。
    破坏了程序的异常机制。
    无法用URL直接访问

##1.2 ajax应用场景

 场景 1. 数据验证
 场景 2. 按需取数据
 场景 3. 自动更新页面
 
##1.3 ajax所包含的技术
 ajax并非一种新的技术，而是几种原有技术的结合体。它由下列技术组合而成。
 使用CSS和XHTML来表示。
 使用DOM模型来交互和动态显示。
 使用XMLHttpRequest来和服务器进行异步通信。
 使用javascript来绑定和调用。
    
    
#2. ajax 使用步骤
Ajax的原理简单来说通过XmlHttpRequest对象来向服务器发异步请求，从服务器获得数据，然后用javascript来操作DOM而更新页面。这其中最关键的一步就是从服务器获得请求数据。原生创建ajax可分为以下四步

##2.1 创建XMLHttpRequest对象
Ajax的核心是XMLHttpRequest对象，它是Ajax实现的关键，发送异步请求、接受响应以及执行回调都是通过它来完成
所有现代浏览器（IE7+、Firefox、Chrome、Safari 以及 Opera）均内建 XMLHttpRequest 对象。
创建 XMLHttpRequest对象的语法：
```javascript
var xhr = new XMLHttpRequest();
```
兼容各个浏览器的创建Ajax的工具函数
```javascript
function createRequest (){
    try {
        xhr = new XMLHttpRequest();
    }catch (tryMS){
        try {
            xhr = new ActiveXObject("Msxm12.XMLHTTP");
        } catch (otherMS) {
            try {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }catch (failed) {
                xhr = null;
            }
        }
    }
    return xhr;
}
```

##2.2 准备请求
初始化该XMLHttpRequest对象，接受三个参数：
```javascript
xhr.open(method,url,async);
```
###第一个参数表示请求类型的字符串，其值可以是GET或者POST。
GET请求：
```javascript
xhr.open("GET",demo.php?name=tsrot&age=24,true);
```

POST请求：
```javascript
xhr.open("POST",demo.php,true);

```
###第二个参数是要作为请求发送目标的URL。

###第三个参数是true或false，表示请求是以异步还是同步的模式发出。（默认为true，一般不建议为false）

false：同步模式发出的请求会暂停所有javascript代码的执行，知道服务器获得响应为止，如果浏览器在连接网络时或者在下载文件时出了故障，页面就会一直挂起。

true：异步模式发出的请求，请求对象收发数据的同时，浏览器可以继续加载页面，执行其他javascript代码

##2.3 发送请求
```javascript
xhr.send();
```
一般情况下，使用Ajax提交的参数多是些简单的字符串，可以直接使用GET方法将要提交的参数写到open方法的url参数中，此时send方法的参数为null或为空。

###GET请求：
```javascript
xhr.open("GET",demo.php?name=tsrot&age=24,true);
xhr.send(null);复制代码
```
###POST请求：

如果需要像 HTML 表单那样 POST 数据，请使用 setRequestHeader()来添加 HTTP 头。然后在send()方法中规定您希望发送的数据：
```javascript
xhr.open("POST",demo.php,true);
xhr.setRequestHeder("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
xhr.sen
```

##2.4 处理响应
```javascript
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        console.log(xhr.responseText);
    }
}
```
onreadystatechange ：当处理过程发生变化的时候执行下面的函数

readyState ：ajax处理过程

0：请求未初始化（还没有调用 open()）。
1：请求已经建立，但是还没有发送（还没有调用 send()）。
2：请求已发送，正在处理中（通常现在可以从响应中获取内容头）。
3：请求在处理中；通常响应中已有部分数据可用了，但是服务器还没有完成响应的生成。
4：响应已完成；您可以获取并使用服务器的响应了。
status属性：

200:"OK"
404: 未找到页面
responseText：获得字符串形式的响应数据

responseXML：获得 XML形式的响应数据
返回值一般为json字符串，可以用JSON.parse(xhr.responseText)转化为JSON对象




## 3.get 和 post 请求

3.1 两者不同
  (1)给服务器传递数据量, get 请求最多是2k  
                      post 原则没限制 php对其限制为8M 
  (2)安全方面,post 传输数据更加安全  
  (3)传递数据的形式不一样  
    - get 方式在 url 地址后边以请求字符串的形式传递参数  
    http://网址/index.php<font color= blue>?name=tom&age=23&addr=beijing</font> 
    以&符号连接的就是请求字符串  
    - post方式是把 form 表单的数据给请求出来以 xml 形式传递给服务器  
    
  ###get请求方式  
  1.在 url 地址之后以请求字符串的形式传递数据 
  2.对中文 = &等特殊符号处理  
   在 js 中用encodeURIComponent()对中文进行编码 
   
  ###post请求方式 
   1.给服务器传输数据需要使用send(请求字符串)的方法 
   2.调用方法setRepuestHeader()把传递的参数组织为xml 格式(仿form 给服务器传送数据)  
    ```javascript
           xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
    ```
   3.传递的中文信息不需要编码,特殊符号需要进行编码  
   4.该方式请求的同时也可以传递 get 参数信息 
   
    
##4.同步和异步

  异步:同一个时间点允许执行多个进程   true
  同步:同一个时间点只允许执行一个程序   false
  ajax 对象open(请求方式 请求地址 同步[异步])
  ![alt text](/Users/edz/Desktop/web/css3/demo/8个css3鼠标滑过图片显示文字动画效果代码/images/img-1.jpg)

##5. 缓存处理

缓存:一次请求需要从服务器获得许多 css html js 等相关文件,如果每次请求都把相关的资源文件加载一次,对 带宽 服务器资源 用户等待时间 都有严重的损耗,浏览器有做了优化处理,在这些文件在第一次请求成功之后就在本地保留一个缓存备份,后续的每次请求就在本身获得相关的缓存资源文件就可以 

动态程序文件,例如 php 文件是不能缓存的,及时出现缓存,也不能出现缓存效果.

客户端浏览器是有缓存的,如果客户端没有信息,再去访问服务器

 
缓存解决
确保每次的请求地址信息是唯一的
解决方式:1.添加时间戳 
        2.在 php 添加 head 头,禁止缓存web 页面
 
 
 
 















