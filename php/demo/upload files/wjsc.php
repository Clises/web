<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/10/10
 * Time: 14:32
 */
/*
 * 需要判断文件的上传，有两种情况：1、文件是否上传，如果上传，判断文件是否上传成功。
 *                                      2、否则是未上传。
 *
 */
if(is_uploaded_file($_FILES["userFile"]["tmp_name"])){
//判断文件是否移动，保证当前文件是可移动的。
    if(!@move_uploaded_file($_FILES["userFile"]["tmp_name"],
        "upload/".$_FILES["userFile"]["name"])){
        echo "失败";
        exit;


    }
    else{
        echo "成功";
        echo "<script>location.href='wjsc.html?url=upload/".$_FILES[userFile][name]."'</script>";

    }










}