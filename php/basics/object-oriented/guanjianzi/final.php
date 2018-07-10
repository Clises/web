<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/10/9
 * Time: 15:45
 */
/*
 * 一般用来修饰行为和类。
 * 1、如果方法被final修饰，方法不能被重写，
 *  2、如果说修饰了类，类不能被继承
 */
   class Animal{
    public $name="zhang";
    //声明方法
   /* final  function huai(){

    }*/
}
//zilei
class Cat extends Animal{
   //final修饰的类其子类不能重写。


}