<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/10/11
 * Time: 10:16
 */
/*
 * 连接数据库：mysql（被弃用）mysqli、pdo
 * $host = '',主机名
 *  $user = '',用户名
 * $password = '',用户名密码
 *  $database = '',数据库名
 * //现在只用的是前四个。
 *  $port = '',端口号
 *  $socket = ''字节端口号
 */
$host="localhost";
$user="root";
$password="";
$database="article";
//创建了连接数据库的方式,顺序必须和之前定义变量一致
//打开一个数据库的服务链接。
$connec=mysqli_connect($host,$user,$password,$database);
//判断
if (!$connec){
    echo "失败";
    //mysqli_connect_error :会返回一个字符串，描述的是最后一次连接数据库产生的问题，
    //7.0版本会出现错误，5.6版本没有错误。
    //解决办法。

    die("失败".mysqli_connect_error());
}
else{
    echo "成功";
}