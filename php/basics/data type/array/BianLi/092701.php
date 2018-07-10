<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/9/27
 * Time: 9:30
 */
$aa=array("Errol","20");
$len=count($aa);
for ($i=0;$i<$len;$i++){
    echo $aa[$i];
}

//关联性数组遍历
$bb=array("name"=>"errol","age"=>"20");
foreach ($bb as $item=>$value){
    echo ($item.$value);
}
//二维数组遍历

$cc=array(
    $dd=array("Errol","20"),
    $ee=array("clise","18"),
);
$ll=count($cc);
for ($m=0;$m<$ll;$m++){
    //遍历外层
    for ($n=0;$n<count($cc[$m]);$n++){ //遍历内层， 条件小于最外层的每层的长度。
        echo $cc[$m][$n];
    }
    echo "\n";
}