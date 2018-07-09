<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/9/26
 * Time: 15:06
 */
//普通的一维数组——数值数组
$aa=array("Errol","boy","20");//动态分配
/*$aa[0]="Errol";
$aa[1]="boy";
$aa[2]="20";*/   //人工分配
$len=count($aa);
echo ($len);
//for循环遍历数组
for ($i=0;$i<$len;$i++){
        echo $aa[$i];
        echo "\n";
}
//关联数组的遍历
$bb=array("name"=>"Errol","age"=>20,"sex"=>"男");
//  =>关联数组创建的时候必不可少的符号。
//遍历关联性数组
//as使用来遍历和赋值。
foreach ($bb as $item=>$value){
    echo "item=".$item."\t".$value;
//    item遍历的结果  .连接符号；\t制表符。
    echo "\n";   //换行
}