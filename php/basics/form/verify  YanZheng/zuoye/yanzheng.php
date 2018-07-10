<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/9/28
 * Time: 15:12
 */
$yonghu=$_POST['aa'];
$mima=$_POST['bb'];
$email=$_POST['cc'];
$shouji=$_POST['dd'];
if(empty($yonghu)){
    echo "<br/>";
    echo "请输入用户名";
}
elseif (!preg_match("/^[a-zA-Z][\w]{7,14}$/",$yonghu)){
    echo "<br/>";
    echo "输入用户名格式错误";

}
else{
    if (preg_match("/^[a-zA-Z][\w]{7,14}$/",$yonghu)){
        echo "<br/>";
        echo "输入用户名正确";
    }
}
//密码
if (empty($mima)){
    echo "<br/>";
    echo "请输入密码";
}
elseif (!preg_match("/^[\w\*]{8,14}$/",$mima)){
    echo "<br/>";
    echo "输入密码格式不正确";
}
else
{
if (preg_match("/^[\w\*]{8,14}$/",$mima)){
    echo "<br/>";
    echo "密码格式正确";
}
}
//邮箱
if (empty($email)){
    echo "<br/>";
    echo "邮箱不能为空";
}
elseif (!preg_match("/^\w+@[0-9a-z]+\.[a-z]+$/i",$email)){
    echo "<br/>";
    echo "请输入正确格式邮箱";
}
else{
    if (preg_match("/^\w+@[0-9a-z]+\.[a-z]+$/i",$email)){
        echo "<br/>";
        echo "邮箱格式正确";
    }
}
if (empty($shouji)){
    echo "<br/>";
    echo "手机号码不能为空";
}
elseif (!preg_match(" /^((13)|(15))+\d{9}$/i",$shouji)){
    echo "<br/>";
    echo "手机号码格式不正确";
}
else{

    if (preg_match("  /^((13)|(15))|((18))|((17))+\d{9}$/i",$shouji)){
        echo "<br/>";
        echo "手机号码输入正确";
    }

}
//手机号码