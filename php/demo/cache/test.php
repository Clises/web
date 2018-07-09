
<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2018/7/9
 * Time: 1:55
 */
$fp=fopen('./test.txt','a');
fwrite($fp,'computer\n');//写内容
fclose($fp);