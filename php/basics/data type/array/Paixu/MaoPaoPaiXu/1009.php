<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/10/9
 * Time: 8:35
 */
$arr=[2,4,1,5,2,3,55];
for ($i=0;$i<=count($arr)-1;$i++){
    for ($m=0;$m<count($arr)-1-$i;$m++){
        if ($arr[$m]<$arr[$m+1]){
            $num=$arr[$m];
            $arr[$m]=$arr[$m+1];
            $arr[$m+1]=$num;
        }
    }
}
print_r($arr);