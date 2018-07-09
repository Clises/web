<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/9/28
 * Time: 13:37
 */
/**
 * 多选逻辑处理：
 *
 */
$myarr=isset($_POST['arr'])?$_POST['arr']:"";
//判断
if (is_array($myarr)){
    $mm=array(
        'A'=>'衣服',
        'B'=>'鞋子',
        'C'=>'裤子',
    );
    echo "您购买了:"."<br/>";
    foreach ($myarr as $item){
        echo $mm[$item]."<br/>";
    }
}
