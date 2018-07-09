<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/10/10
 * Time: 10:17
 */
//关联型数组    json存储以关联型数组为主。
$myJson=array(
    "name"=>"errol",
    "age"=>"20",
    "sex"=>"男"
);
//转换成json
echo json_encode($myJson);
//以下进行获取的，没有键。



$aa=array("errol","20","男");
echo json_encode($aa);