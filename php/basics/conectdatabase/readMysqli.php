<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/10/11
 * Time: 11:12
 */
$host='localhost';
$username='root';
$password='';
$database='errol';
//创建链接
$conn=new  mysqli($host,$username,$password,$database);
if (!$conn){
    echo "连接失败";
//    die("连接失败".$conn->connect_errno);
}
else{
    echo "连接成功";
}
//访问数据库,先创建查询数据库的sql语句。
$sql='select NAME from student';
//查询
//第一个参数连接，第二个需要查询的sql语句
$result=mysqli_query($conn,$sql);
//判断
if($result->num_rows>0){
    //循环查询,只要是查数据库都要使用循环。
    while ($rr=$result->fetch_assoc() ){

        echo "NAME:".$rr['NAME']."<br/>";
        /*
         * //数据库在存储数据的时候，和XX取出数据的时候有区别
        //存储的是utf-8； unicode编码。
         *5
         */

    }
        //以数组的形式去获得一行结果
}
else{
    echo "查询不到结果";
}
//关闭连接
$conn->close();
?>

