<?php
/**
 * 常量值被定义后，在脚本的其他任何地方都不能改变。
 *一个常量由英文字母、下划线、 和数字组成，但数字不能作为首字母出现（常量名不需要加$修饰符）
 *constant_name：必选参数，常量名称，即标志符。
value：必选参数，常量的值。
case_sensitive：可选参数，指定是否大小写敏感，设定为 true 表示不敏感。
 */

//设置常量
define("aa","wwwwww",true);
echo  aa;
define("bb",123,true);
echo bb;