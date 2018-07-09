<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/9/27
 * Time: 8:28
 */
//创建数组
$aa =array("name","20");
//获取数组的长度
$len=count($aa);
for ($i=0;$i<$len;$i++){
    echo $aa[$i];
    echo "\n";
}
//关联性数组
$bb=array("name"=>"Errol","age"=>"20");
//遍历数组
foreach ($bb as $item=>$value){
    echo $item.$value;
    echo "\n";

}
//二维数组


$cc=array(
    $dd=array("name","Errol"),
    $ee=array("clies","20"),
);
$ll=count($cc);
//遍历数组
for($m=0;$m<$ll;$m++){
    //遍历最外层
    for($k=0;$k<count($cc[$m]);$k++){
        echo $cc[$m][$k];
    }
    echo "\n";
}