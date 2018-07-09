<?php
/**
 * 超级全局常量：超级全局变量数组；存储了一系列的变量，
 * 在整个脚本的任意位置都能使用，是一个包含了所有变量的数组。
 */
$a=10;
$b=20;
//方法
function Errol(){
    //$GLOBALS['z']是一个变量，从超级全局变量数组GLOBALS当中取出。
    //超级全局变量能够在全局任意使用
    $GLOBALS['z']=$GLOBALS['a']+$GLOBALS['b'];
}
Errol();
echo $z;
//