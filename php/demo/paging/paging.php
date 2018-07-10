<?php
/**
 * Created by charlies
 * User: charlies
 * Date: 2018/7/8
 * Time: 21:57
 */
$link=mysqli_connect("localhost","root","","user");
//mysqli_select_db($link,'user');//修改数据库
echo <<<eof
<style type="text/css">
table{
width: 500px;
margin: 0 auto;
border: 1px solid black;
border-collapse: collapse;
}
td{
border: 1px solid black;
}
tr{
font-weight: bold;
}
</style>
<table>
<tr><td>编号</td><td>姓名</td><td>手机号</td></tr>
eof;
//引入分页类
include "methods.php";
//执行对数据库进行查询
$qry=mysqli_query($link,"SELECT * FROM message");
//总条数
$total=mysqli_num_rows($qry);
//每页显示条数
$per=5;
//实例化
$page=new Page($total ,$per);
//设置sql语句获得每页信息
$sql3="SELECT * FROM message order by id ".$page->limit;
$qry3=mysqli_query($link,$sql3);
$page_list=$page -> fpage();

//对数据库中传来的编号的进行配置
//$page_num=isset($_GET_['page'])?$_GET['page']:1;
//$num=($page_num-1)*$per+1;
//数据渲染
while ($rst3=mysqli_fetch_assoc($qry3)){
    printf("<tr>");
    printf("<td>%d</td>",$rst3['id']);
    printf("<td>%s</td>",$rst3['username']);
    printf("<td>%s</td>",$rst3['phone']);
    printf("</tr>");
//    $num++;
}
printf("<tr><td colspan='5'>%s</td></tr>",$page_list);
echo "</table>";