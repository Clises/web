<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/10/9
 * Time: 15:32
 */
/*
 *
 */
class Person{
    public static $name="张三";
    public $age=90;
    public function hao(){
        echo "普通";
    }
    //声明一个静态的局部方法。
    public static  function huai($nn=""){
        global  $name;
        $name=$nn;
        echo "类中的静态方法"."\t".$name;
    }
}
echo Preson::huai();//直接调用类中的方法。
echo Person::huai("李思思");//修改属性值：通过类名直接调，并改变它的属性值。

//另一种修改属性值的方式：
Person::$name="Errol";//只是改变了值，但是没有改变，也是类名直接去调用属性。
//只能在当前属性被static修饰过之后去做，如果没有修饰，没办法去做。
echo Person::huai(Person::$name);//传递了一个新的参数。


?>