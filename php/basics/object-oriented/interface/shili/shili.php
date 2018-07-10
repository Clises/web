<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/10/9
 * Time: 10:47
 */
/*
 * 动物：狼、狮子、老虎，      共性：年龄 ，性别，姓名。  吃喝拉撒睡 五种行为。
 *人：黑 白  黄                  共性：年龄 ，性别，姓名。  吃喝拉撒睡 五种行为。
 * 植物：杨叔， 柳树 桃树         树：年龄、姓名  一般生长在土壤之中，  光合作用，
 *
 * 接口里写行为：吃喝
 *
 * 人：抽象类单独的属性是肤色。
 *植物抽象类单独属性：一般生长在土壤之中。
 *
 *
 *
 * 有父类、有抽象类、有接口
 * 通过页面输入可以查询相应事物的属性值。
 * 通过继承、接口封装来实现。
 */
/*
 * 接口：作为三种事物的（父类）父接口
 *
 *
 * */
interface Thing{
    /*
     * 抽象方法1、 吃饭
     * 2、喝水
     * 3、睡眠
     *
     * */
    public function eat($food="");
    public function drink($water="");
    public function sleep($bed="");
    //输出的方法。
    public function OutContent();
}
//构成一个单独的父抽象类。
abstract class FatherClass{
    public $name="";
    public $age="";
    public $sex="";
}
class Wolf extends FatherClass implements  Thing
{

    public $tail="";
    //实现各个抽象方法，
    /**
     * Wolf constructor.
     */
    public function __construct($name="",$age=0,$sex="")
    {
        $this->name = $name;
        $this->age = $age;
        $this->sex = $sex;
    }
    public function eat($food = "")
    {
        //TODO：指当前代码还没写，需要填充完成。
        //当前位置需要修改，还未完成，

        echo "狼吃羊";
        // TODO: Implement eat() method.
    }

    public function drink($water = "")
    {
        echo "山泉";
        // TODO: Implement drink() method.
    }


    public function sleep($bed = "")
    {
        echo "群居";
        // TODO: Implement sleep() method.
    }

    public function OutContent()
    {
        echo "动物的名字：" . $this->name . "\t" . "动物年龄:" . "\t" . $this->age . "动物性别:" . $this->sex;
        // TODO: Implement OutContent() method.
    }

}
  //人
class People extends FatherClass implements  Thing
{

    public $skin="";
    //实现各个抽象方法，
    /**
     * Wolf constructor.
     */
    public function __construct($name="",$age=0,$sex="",$skin="")
    {
        $this->name = $name;
        $this->age = $age;
        $this->sex = $sex;
        $this->skin = $skin;
    }
    public function eat($food = "")
    {
        // TODO: Implement eat() method.
    }

    public function drink($water = "")
    {
        // TODO: Implement drink() method.
    }

    public function sleep($bed = "")
    {
        // TODO: Implement sleep() method.
    }

    public function OutContent()
    {
        echo "武当掌门人的名字：" . $this->name . "\t" . "他的年龄：" .
            $this->age . "\t" . "他的性别：" . $this->sex . "他的肤色：" . $this->skin;
    }
}

class Liushu extends FatherClass implements  Thing
{
    //生长在土里
    public $shengzhangturang = "";

    public function __construct($name="",$shengzhangturang="",$age="")
    {
            $this->name=$name;
            $this->shengzhangturang = $shengzhangturang;
        $this->age=$age;
    }

    public function eat($food = ""){
        echo "光合作用";
        // TODO: Implement eat() method.
    }
    public function drink($water = ""){
        echo "光合作用";
        // TODO: Implement drink() method.
    }
    public function OutContent(){
        echo "树名：" . $this->name . "\t" . "年龄：" .
            $this->age . "\t" .  "他的肤色：" . $this->shengzhangturang;
        // TODO: Implement OutContent() method.
    }
}


//接受输入的值；
$name = isset($_GET['name']) ? htmlspecialchars($_GET['name']) : " ";
//判断是否为空
    if(!empty($name)){
//判断
        if($name=="狼"){
//创建动物子类实例
//$wolf=new Wolf();
            $wolf=new Wolf("灰太狼","25","公");
            $wolf->OutContent();
        }
    }elseif($name="人"){
        $people=new People("errol","20","男","黄皮肤");
    }
    elseif ($name="柳树"){
        $liushu=new  Liushu("柳树","黄土地","20");
    }
    else{
        echo "请输入要查询的事物名称：";
    }












