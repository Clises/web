两者不同
  1.给服务器传递数据量, get 请求最多是2k
                      post 原则没限制 php对其限制为8M
  2.安全方面,post 传输数据更加安全
  3.传递数据的形式不一样
    - get 方式在 url 地址后边以请求字符串的形式传递参数 
    http://网址/index.php?name=tom&age=23&addr=beijing
    以&符号连接的就是请求字符串
    - post方式是把 form 表单的数据给请求出来以 xml 形式传递给服务器
  
    
   
