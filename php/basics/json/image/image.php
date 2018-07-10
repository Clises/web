<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/10/10
 * Time: 13:37
 */
/*
 * 关联型数组存储图片
 *
 */
$myarr=array(
    "resultcode"=>"200",//成功状态码的返回
    "reason"=>"successed",   //原因
    "shuzu1"=>array(
        "my"=>array(
            "name"=>"张国荣",
            "age"=>60,
            "sex"=>"男",
            "picture"=>"http://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E5%BC%A0%E5%9B%BD%E8%8D%A3&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&cs=211739148,3146626325&os=3038501618,3505655644&pn=0&rn=1&di=20622930620&ln=3946&fr=&fmq=1507614599057_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=740394428,3996576029&istype=0&ist=&jit=&bdtype=17&pi=0&gsm=0&objurl=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fb17eca8065380cd7276a3fc0aa44ad34598281a3.jpg&rpstart=0&rpnum=0&adpicid=0&ctd=1507614616573^3_1349X605%1"
        ),

    ),
    "error_code"=>"0",  //错误返回
);
echo json_encode($myarr);