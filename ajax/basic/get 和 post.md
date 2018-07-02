两者不同
  1.给服务器传递数据量, get 请求最多是2k
                      post 原则没限制 php对其限制为8M
  2.安全方面,post 传输数据更加安全
  3.传递数据的形式不一样
    - get 方式在 url 地址后边以请求字符串的形式传递参数 
    http://网址/index.php<font color= blue>?name=tom&age=23&addr=beijing</font>
    以&符号连接的就是请求字符串
    - post方式是把 form 表单的数据给请求出来以 xml 形式传递给服务器
  #get请求方式
  1.在 url 地址之后以请求字符串的形式传递数据
  2.对中文 = &等特殊符号处理
   在 js 中用encodeURIComponent()对中文进行编码
   
  #post请求方式
  
