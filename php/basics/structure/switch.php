<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/9/26
 * Time: 14:54
 */
$a=10;
$a++;
switch ($a){
    case 10:
        echo "ok";
    default :
        echo "no";//default 语句用于不存在匹配（即没有 case 为真）时执行。
}