<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/9/27
 * Time: 15:02
 */
/*  1、 普通方法：解决业务逻辑。
          function准则：
  *   函数名应该提示出它的功能。   函数名称以字母或者下划线开头，数字不能作为开头。
*   2、类中的构造方法：方法名要和类名一致，目的是为了创建实例化对象
 * 3、静态方法
 *
 */
//普通的方法
class Animal{
    var $name;
    //构造方法；目的是为了实例化对象
    function Animal($name=""){



    }
    //类中的方法，
    function hao(){

    }
}
//带有返回值的方法
    function huai($x,$y){
        $num=$x+$y;
        return $num;
    }
$a=10;
$b=20;


$aa=10;
$bb=20;
function hao(){
global $aa;
global $bb;
$cc=$aa+$bb;
echo $cc;
}
//调用方法
hao();//在整个文件之中，直接调用名。
$animal=new Animal("Errol");
//类的实例化对象去调用类中的方法。
$animal->hao();//类中的方法
//调用带有返回值的方法
echo "x+y".huai(23,40);


