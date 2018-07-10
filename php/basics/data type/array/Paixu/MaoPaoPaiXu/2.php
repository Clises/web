<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/9/27
 * Time: 19:45
 */
//冒泡排序
$aa=array(1,23,78,14,4,1,2,11);
//外层循环，控制循环最少的次数
for($m=0;$m<count($aa)-1;$m++){
    for ($n=0;$n<count($aa)-1-$m;$n++){
        if ($aa[$n]<$aa[$n+1]){
//        值的传递
            $num=$aa[$n];
            $aa[$n]=$aa[$n+1];
             $aa[$n+1]= $num;
        }
    }
}
print_r($aa);