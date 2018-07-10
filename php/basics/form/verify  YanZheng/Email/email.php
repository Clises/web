<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/9/28
 * Time: 14:36
 */

$myemail=$_POST['bb'];
//判断非空
if(empty($myemail)){
    echo "邮箱的值不能为空";
}
//邮箱输入格式不正确
else if (!preg_match("/^\w+@[0-9a-z]+\.[a-z]+$/i",$myemail)){
//输出
     echo "输入邮箱格式不正确";
}
else {
    if ( preg_match("/^\w+@[0-9a-z]+\.[a-z]+$/i",$myemail)) {
        echo "邮箱格式正确";
    }
}
?>
