<?php

$aa=array(0,12,14,1,5,9,41);
//外层循环，控制比较次数最少
for($i=0;$i<=count($aa)-1;$i++){
 //内层循环
    for ($j=0;$j<count($aa)-$i-1;$j++){
      if ($aa[$j]>$aa[$j+1]){
          $num=$aa[$j];
          $aa[$j]=$aa[$j+1];
          $num=$aa[$j+1];
      }
    }

}
print_r($aa);