<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/10/11
 * Time: 14:31
 */
$aa=array(
    'a'=>'阿斯顿',
    'b'=>'阿斯顿',
    'c'=>'啊速度',
    'd'=>'阿斯顿',
    'e'=>'阿斯顿',
    'f'=>' 阿斯顿',
    'g'=>'阿斯顿',
);
$ee=json_encode($aa);
echo $ee;
//反向转换
$hh=json_decode($ee);
//遍历数组
foreach ($hh as $item=>$value){
    echo "$item"."$item"."/t"."$value".$value."\n";
}
?>