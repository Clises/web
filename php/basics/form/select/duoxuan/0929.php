<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/9/29
 * Time: 8:31
 */
$aa=isset($_POST['arr'])?$_POST['arr']:" ";
if (is_array($aa)){
    $bb=array(
        "A"=>"詹姆斯",
        "B"=>"韦德",
        );
        echo  "选择你喜欢的球星";
        foreach ( $aa as $value){
            echo $bb[$value];
        }
        }
        else{
    echo "请选择";
        }

