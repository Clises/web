<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/9/28
 * Time: 8:34
 */
$aa=array(1,2,35,7,1,4,11,123,5851);
sort($aa);//升序
print_r($aa);
rsort($aa);//降序
print_r($aa);

$bb=array("name"=>"Errol","age"=>20);
asort($bb);
print_r($bb);//升序

arsort();//降序


