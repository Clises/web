<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/10/9
 * Time: 9:19
 */
/*
 *
 */
//继承父类存在的
class Preson{
    public $name="张三";
    public $age=20;
    public $sex="男";

    /**
     * Preson constructor.
     * @param string $name
     */
         public function __construct($name="张三")
    {
        //->类似于.的调用。
        $this->name=$name;

    }
    function hao(){
        echo"输出的内容来自父类的普通方法。";
    }

}
//子类需要放在父类之外，
//放在父类之内是内部类。

class Student extends  Preson{
    //首先继承的是父类的构造方法。 相当于替换了student的方法名。
    public function __construct($name = "张三")
    {
        //调用的是父类本身的构造方法。    ::   :范围解析操作符。
        parent::__construct($name);
    }
        //购买的方法，为了解决子类的事件。
    function hao()
    {
        //调用父类的普通方法
        //parent::hao();
        //把继承的方法进一步扩展，为了解决各种功能，解决当前子类需要解决的问题。
        echo"解决子类当中的具体逻辑事件";
    }

}
//实例化
$mystudent=new Student("李四");
//多态的一种体现，父类向子类的转型，容易造成数据类型匹配异常。
//$mystudent22=new Preson("Errol");
//$mystudent22=$mystudent;


//调用方法
$mystudent->hao();





