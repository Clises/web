<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/9/28
 * Time: 10:13
 */
//这是不需要判断是不是字符串
$menu=isset($_POST['arr'])?$_POST['arr']:"";

//判断是否为数组
if(is_array($menu)){
    //声明一个关联型数组，内容和html的一致，为了用户提交按钮的时候进一步页面内容展示。
    //html实质上不是一个数组，根据html的内容在php创建了一个关联型数组。
    //当用户拿到这个vlaue键对应的就是菜单的值。
    $aa=array(
        'A'=>'菜单1',
        'B'=>'菜单2',
        'C'=>'菜单3',
        'D'=>'菜单4',
    );
 //处理用户的点击事件，遍历
    echo "您点了一下几样菜";
    foreach ($menu as $value){
        //作为键传进来
        echo $aa[$value]."<br/>";
    }
}
else{
    echo "请点菜:";
}