1.什么是 ajax?
可以与服务器进行(异步/同步)交互的技术之一
最大的特点的是:页面无刷新

#ajax 使用步骤

1.发送请求  
2.接收服务器返回的信息  

#get 和 post 请求
  ##两者不同
  1.给服务器传递数据量, get 请求最多是2k  
                      post 原则没限制 php对其限制为8M 
  2.安全方面,post 传输数据更加安全  
  3.传递数据的形式不一样  
    - get 方式在 url 地址后边以请求字符串的形式传递参数  
    http://网址/index.php<font color= blue>?name=tom&age=23&addr=beijing</font> 
    以&符号连接的就是请求字符串  
    - post方式是把 form 表单的数据给请求出来以 xml 形式传递给服务器  
  ##get请求方式  
  1.在 url 地址之后以请求字符串的形式传递数据 
  2.对中文 = &等特殊符号处理  
   在 js 中用encodeURIComponent()对中文进行编码 
   
  ##post请求方式 
   1.给服务器传输数据需要使用send(请求字符串)的方法 
   2.调用方法setRepuestHeader()把传递的参数组织为xml 格式(仿form 给服务器传送数据)  
    ```javascript
           xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
    ```
   3.传递的中文信息不需要编码,特殊符号需要进行编码  
   4.该方式请求的同时也可以传递 get 参数信息 
   
    
  ##同步和异步
  异步:同一个时间点允许执行多个进程   true
  
  同步:同一个时间点只允许执行一个程序   false
  ajax 对象open(请求方式 请求地址 同步[异步])
  
  
  ![alt text](/Users/edz/Desktop/web/css3/demo/8个css3鼠标滑过图片显示文字动画效果代码/images/img-1.jpg)
