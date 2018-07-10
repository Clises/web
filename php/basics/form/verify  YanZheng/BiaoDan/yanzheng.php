<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/9/28
 * Time: 13:49
 */
/*
 * 获取验证的值
 */
$name=$_POST['aa'];
//判断用户是否输入
//判定的是字母字母组成的，
if(empty($name)){
    echo "请输入姓名";
}
elseif (!preg_match( "/^[a-zA-Z]*$/",$name)) {
    //进一步去判断
    $nameERROR = "只能输入字母作为名字：";
    echo $nameERROR;
}else{
//用户输入的格式是正确的，放在这里处理。
    if(preg_match( "/^[a-zA-Z]{6,18}$/",$name)){
    echo "姓名输入格式正确，允许提交";
    }
   else{
        echo "姓名个数应该是6到18位";
   }
}