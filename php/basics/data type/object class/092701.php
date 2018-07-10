<?php
class Preson{
    var $name;
//    构造方法
function Preson($name){
    $this->name=$name;
}
//普通方法
function hao(){
    return $this->name;
}
}
//遍历
function bianli($obj){
    foreach ( get_object_vars($obj) as $nnn=>$mmm ){
        echo "$nnn=$mmm";
    }
}
//创建实例
$aa=new Preson("Erool");
bianli($aa);