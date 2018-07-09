<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/9/26
 * Time: 9:32
 */

/**
 * object class，是可以存储数据的
 * class 去修饰，去创建一个类
 * 类的结构：只包含属性和行为　　（即：属性和方法）
 */
//添加类，
class  Person{
//    添加类的属性.
    var $name;//姓名
    var $age;//年龄
    var $sex;//性别


    //构造方法
    /*
     * $this->myss  :指的是当前类的属性
     */

//    添加当前类的类名方法,最终用来实例化的.
//设置参数.在调用的时候可以去传值.
    function Person($name = "red",$age=1,$sex="sfd"){
//        this指向当前类的属性.
        $this->age = $age;
        $this->name = $name;
        $this->sex = $sex;
    }
    //普通方法
    function hao(){
        return $this->name;
        return $this->sex;
        return $this->age;
    }
}
/**
 *  $obj  参数变量
 */
function rin($obj){
    //遍历传进来的参数
    /*
     * as:意思是把当前对象赋值给$value，$nnn指的是键
     * 2、遍历当前对象或者数组
     */
    foreach (get_object_vars($obj) as $nnn=>$value){
        echo  "\n$nnn=$value\n";
    }
}
//创建了一个类的实例,是通过实例存储的
$myPerson = new Person( "");
echo "\n";
rin($myPerson);
?>