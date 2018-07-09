<?php
$aa=array(1,2,5,8,1,2,33);
for($m=0;$m<count($aa)-1;$m++){
    for ($n=0;$n<count($aa)-1-$m;$n++){
        if ($aa[$n]<$aa[$n+1]){
            $num=$aa[$n];
            $aa[$n]=$aa[$n+1];
            $aa[$n+1]=$num;
        }
    }
}
print_r($aa);


?>