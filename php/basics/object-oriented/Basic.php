<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/9/29
 * Time: 9:26
 */
/*
 * 程序的发展史:
 * 1、0和1 电信号传输最早，非结构化程序，
 * 2、汇编语言：c语言的原型，一直到c语言的成熟;结构化编程的概念正式形成、
 * 3、面向对象编程：面向的是个体，实体，指的是能够把现实中的具体的食物事物拿到现实中去表示、
 *          万事万物皆对象。
 * 4、 把具体事物抽象化，把当前具体事物所代表的一类事物抽象化。
 *            书：纸质，阅读，颜色，易燃，
 *                  行为：存储事物，老化。    写成方法。
 *      面向对象的三大特征：封装、继承、多态。
            类名：book
 *      事物具备的特点用属性来代表。
 *
 *
 *
 */
class Animal{
    private $psss;

    /**
     * @return mixed
     */
    public function getPsss()
    {
        return $this->psss;
    }

    /**
     * @param mixed $psss
     */
    public function setPsss($psss)
    {
        $this->psss = $psss;
    }
}

//符号

class Preson{
    var $name;
    //构造方法
    function Preson($name){
        $this->name=$name;
    }
}
$myPreson=new  Preson("Errol");
//指向的是类的属性值。
//指向的方法。
//=> 插入式解引用操作符
//::范围解析操作符。
/*
 *
 */
//=== 绝对等于。判断两个值是否相等外，还能判断两边的数据类型。
