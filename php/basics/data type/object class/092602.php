<?php
//创建类
class Preson
{
    var $name;
    var $age;
    var $sex;

//构造一个方法
    function Preson($name,$age,$sex)
    {
        $this->name = $name;
        $this->age = $age;
        $this->sex = $sex;
    }

}
//实例化遍历
function bianli($obj){
    foreach (get_object_vars($obj) as $nnn=>$value){
        echo  "\n$nnn=$value\n";
    }
}
//创建一个实例
$aa=new Preson("Errol","18","NAN");

echo "\n";
bianli($aa);
?>