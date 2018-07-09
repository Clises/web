<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/10/11
 * Time: 10:30
 */
/*
 * PDO:链接数据库。
 * $dsn, $username, $passwd, $options
 */
$host="localhost";
$user="root";
$password="";
$database="article";
$pdo=new PDO("mysql:host=$host;dbname=$database",$user="root",$password);
if (!$pdo){
    echo "链接失败";
}
else{
    echo "连接成功";
}