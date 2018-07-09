<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/9/27
 * Time: 14:11
 */
$myarray=array(12,13,4,7,8,0,54,11);
//外层循环,控制比较次数最少
//为什么-1？最多增加到8；每一次的第二次都需要减去一次。
for($i=0;$i<=count($myarray)-1;$i++) {
    //内层循环,处理的比较
    for ($j = 0; $j < count($myarray) - 1 - $i; $j++) {
        //-$i   排
        //除比较产生的最大值。
        //判断需要的是两个元素进行比较
        if ($myarray[$j] < $myarray[$j + 1]) {
            $num = $myarray[$j];
            $myarray[$j] = $myarray[$j + 1];
            $myarray[$j + 1] = $num;

        }
    }

}
print_r ($myarray);
