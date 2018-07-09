<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/10/10
 * Time: 11:22
 */
/*
 * object:对象数据类型。
 * 程序里面什么是对象？
 * new+类名就叫做对象。
 */
//封装的理念部分属性封装
class  Student
{
    public $name = "张三";
    //当对象转换成json的时候封装的属性没办法转换，
    //对象当中的方法不能转换成json。

    private $age = 20;
    public $sex = "男";
    public $number = 20171010;

    //构造方法
    public function __construct($name = "张三", $age=20,$sex="男",$number=20171010)
    {
        $this->name=$name;
        $this->age=$age;
            $this->sex=$sex;
                $this->number=$number;

    }
    public  function aa(){
        echo "普通方法";
    }
    private function bb(){
        echo "私有的 ";
    }

}
//实例化
//$my->aa();
$my=new Student("Errol",20,"男",001);
echo json_encode($my);
