
<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/9/29
 * Time: 9:37
 */
/*
 * 封装：把当前类中的属性和方法都私有化。 private
 *      目的为了保证数据的安全。
 *         private：被修饰的属性和方法只能在当前类中去使用，还可以在当前方法中去使用。出了类就无法调用。
 *
 */
class Animal{
    //var $name;//旧的语言里面的定义结构，意思就是公有的，public
    public $name;
    //封装和不封装的区别：创建了不使用；默认是灰色的。
    private $sex;
  /*  function Animal($name="d",$sex="10"){
        $this->name=$name;
        }*/
   function hao(){
    echo $this->name."".$this->sex;
}

    /**
     * @return mixed
     */
    public function getSex()
    {
        return $this->sex;
    }

    /**
     * @param mixed $sex
     */
    public function setSex($sex)
    {
        $this->sex = $sex;
    }
}


//实例化当前类的对象
$myanimal=new Animal("Errol","10");
//$myanimal->name="clies";
$myanimal->setSex("100");//私有的
$myanimal->hao();