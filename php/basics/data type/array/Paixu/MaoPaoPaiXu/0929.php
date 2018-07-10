<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/9/29
 * Time: 13:44
 */
$aa=array(55,11,74,110,74,25,0);
for ($m=0;$m<count($aa)-1;$m++){
    for ($n=0;$n<count($aa)-1-$n;$n++){
        if ($aa[$n]<$aa[$n+1]){
            $num=$aa[$n];
            $aa[$n]=$aa[$n+1];
            $aa[$n+1]=$num;
        }
    }
}
print_r($aa);
?>