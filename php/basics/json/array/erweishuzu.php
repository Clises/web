<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/10/10
 * Time: 11:12
 */



/*$arr=array(

    array(1,2,3,4,5,6),
    array('a','b','c','d','e'),
    array('张国荣','陈奕迅')
);
echo json_encode($arr);*/


//二维的关联型数组
$guanlian=array(
    array(
        'key1'=>'张国荣',
        'key2'=>'陈奕迅',
        'key3'=>'梅艳芳',
        'key4'=>'刘德华',
        'key5'=>'黄家驹',
        'key6'=>'周星驰',
        'key7'=>'张学友',
    ),
    array(
        'age1'=>'张国荣',
        'age2'=>'陈奕迅',
        'age3'=>'梅艳芳',
        'age4'=>'刘德华',
        'age5'=>'黄家驹',
        'age6'=>'周星驰',
        'age7'=>'张学友',
    )
);
echo json_encode($guanlian);