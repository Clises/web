<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/9/27
 * Time: 9:54
 */
/*
 * 数组升序 sort
 */
$a=array("Errol","Clise","wede");
//升序,只判断首字母的顺序。
//sort($a);
//输出
print_r($a);
$b=array(1,2,3,1,4,7725,4);
sort($b);
print_r($b);

//*********降序 rsort
rsort($a);
print_r($a);



