<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/9/27
 * Time: 9:42
 */
class Preson{
    var $name;
    function Preson($name){
        $this->name=$name;
    }
}
function rin($obj){
    foreach (get_object_vars($obj)as $nnn=>$mmm){
        echo $nnn.$mmm;//加“”会按照字符串输出。
    }
}
$Errol=new Preson( "Errol");
rin($Errol);