<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/9/28
 * Time: 11:20
 */
$aa=isset($_GET['yy'])?htmlspecialchars($_GET['yy']):" ";
//判断
if($aa){
    if($aa=="A"){
        echo "点击了1";
    }
    if($aa=="B"){
        echo "点击了2";
    }
    if($aa=="c"){
        echo "点击了3";
    }

} else{
    echo "你没有点击按钮";
}