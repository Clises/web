<?php
/**
 * 选择的事件，判断选择的是哪一项
 * isset:返回一个变量值存在的话返回true，不存在的返回false
 * htmlspecialchars:转换的是字符串，前提是字符串需要存在
 */

$menu=isset($_GET['aa'])?htmlspecialchars($_GET['aa']):" ";//三木运算判断如果得到下拉框中的数据为字符串，htmlspeciakchars判定
//如果不是返回一个空的字符串。
//判断
if ($menu){
    if ($menu=="A"){
        echo "菜单1";
    }
    if ($menu=="B"){
        echo "菜单2";
    }
    if ($menu=="C"){
        echo "菜单3";
    }
}
else{
    echo "用户没做任何操作和选择";
}