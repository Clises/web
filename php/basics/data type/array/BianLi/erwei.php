<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/9/26
 * Time: 15:48
 */
$aa=array(
    $bb=array("Errol","boy","20"),
        $cc=array("clise","girl","22"),
$dd=array("opdc","boy","20"),
);
echo $aa[2][2];
//二维数组的遍历
$ll=count($aa);
//遍历外层
    for($i=0;$i<$ll;$i++){
//  遍历内层
        for($j=0;$j<count($aa[$i]);$j++){
            //输出一维数组中的内容。
            echo $aa[$i][$j]."\t";
        }echo"\n";

    }