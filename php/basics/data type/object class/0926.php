<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/9/26
 * Time: 20:56
 */
//创建类
class Preson{
    //声明类的属性：
    var $name;
//    构造方法
    function Preson($name){
        $this->name=$name;
    }
    //普通方法
    function hao(){
        return $this->name;
    }
//    遍历,输出。

}
function bianli($obj){
    foreach (get_object_vars($obj) as $nnn=>$mmm){
//        get_object_vars 获取实例化的值，as （并把当前的值以$nnn=>$mmm 形式输出)
        echo $nnn=$mmm;
    }
}
$aa=new Preson("Errol");
bianli($aa);