<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/9/28
 * Time: 19:17
 */
$aa=array("name"=>"Errol","age"=>20);
foreach ($aa as $item=>$value){
    echo $item.$value;
}

$bb=array(
    $cc=array("errol","20"),
    $dd=array("clise","20")
);
for ($m=0;$m<count($bb);$m++){
    for ($n=0;$n<count($bb[$m]);$n++){
        echo $bb[$m][$n];
    }
}
print_r ($bb[1]);
