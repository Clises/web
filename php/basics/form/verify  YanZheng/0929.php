<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/9/29
 * Time: 8:17
 */
 $aa=$_POST['aa'];
 if (empty($aa)){
     echo "不能为空";
 }
 elseif (!preg_match("/^[\w\*]{8,14}$/",$aa)){
     echo "错误格式";
 }
 else {
     if (preg_match("/^[\w\*]{8,14}$/", $aa)) {
         echo "格式正确";
     }
 }