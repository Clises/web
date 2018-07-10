<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/10/11
 * Time: 13:38
 */
$host='localhost';
$username='root';
$password='';
$database='test';
try {

    $pdo = new PDO("mysql:host=$host;dbname=$database", $username, $password);
    if (!$pdo) {
        die("链接失败");
    } else {
        echo "链接成功";
    }
}catch(PDOException $e){
    //输出的是错误信息。
    echo  $e->getMessage();
}
//设置数据库的编码格式,不一定好使。
$pdo->query("set names utf8");
//创建查询的SQL语句
$sql='select* from data';
//调用一个方法。
$rr=$pdo->prepare($sql);
//转化数组
$name='';
//声明一个结果，执行一个声明后的结果（转换成数组）
$result=$rr->execute(array($name));
//单独声明空的数组，进行中间值的转换
$data=array();
//判断

if($result){
//循环
    //fetchAll() 返回所有的查询结果当成一个数组。
    //fetch 返回的是字段。
    while($dd=$rr->fetchAll()){
    //输出之前转换，查询的结果赋值给数组，
        $data=$dd;
    }
}
//使用var_dump.直接输出的是一种结构。直接就是解析后的json。
//var_dump($data);
//print_r($data);
//转换成json
$myjson=json_encode($data);
//输出
echo $myjson;

//单独的数据库开发。


