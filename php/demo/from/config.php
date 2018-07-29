<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2018/7/29
 * Time: 0:15
 */


//接受客户端传递过来的form表单信息
print_r($_FILES);

//增加判断限制,  0 代表ok
if ($_FILES['user_pic']['error']>0){
    exit("上传附件有问题");
}
$path="./upload/";
$name=$_FILES['user_pic']['name'];

//附件上传逻辑
if (move_uploaded_file($_FILES['user_pic']['tmp_name'],$path.$name))
    echo "success";
else
    echo "fail";
