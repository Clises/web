<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/9/26
 * Time: 13:46
 */
// 算数运算符：+-/* % -x取反 a.b并置连接两个字符串。
/*赋值运算符：
 * x=y 赋值
 * x+=y；x=x+y；
 * x-=y；x=x-y；
 * x*=y；x=x*y
 * x%y;x=x%y  模运算
 * a.b;a=a.b
 */
//******************++ -- operator
/*
 * ++x;x+1然后返回x；
 * x++；返回x；然后x+1
 * --x；x-1然后返回x；
 * x--；返回x；然后x-1；
 */
$a=10;
$b=20;
$c=30;
$d=$b+$c;//   d=50
$f=--$a+$b--;// a=9; b=20因为是b--所以先返回b=20；运算完之后b=19；    f=20+9      f=29;
$c=$a;//c=9;
$e=++$c+$f;//++c=10;e=39/
echo $a;
echo "\n";
echo $b;
echo "\n";
echo $c;
echo "\n";
echo $f;
echo "\n";
echo $d;
echo "\n";
echo $e;
//************比较运算符
/*x==y；等于；如果x=y；返回true；
 *x===y；恒等于 如果x=y；它们的类型也相同；返回true
 * x！=y；不等于；如果x不等于y；返回true；
 * x<>y;不等于；如果x不等于y；返回true
 * x!==y；不恒等于；如果x不等于y；或者它们的类型也不同；返回true
 * x>y
 * x<y
 * x>=y
 * x<=y
 *
 *  */
//**************逻辑运算符
/*x and y；与；如果x和y都为true；返回true
 * x or y；或; 如果x和y至少有一个为true；返回true；
 * x  xor y；如果x和y有且仅有一个为true；则返回true；
 * x&&y   与；如果x和y都是true；则返回true；
 * x||y;    或
 * !x   非
 *
 *
 *
 * */
//or  只要有一个正确都为正确。
echo "\n";
    $g=10;
    $m=20;
    $h=false;
    $i=$g or $h;  //  =的优先级大于or
    echo $i;
echo "\n";
$p=$a||$h;
//   || 优先级大于=号，
var_dump($p);//  bool（true）
echo "\n";
echo $g+$m;  // 输出方式，这是一个表达式。
//声明第三方变量来输出。
$t=$g+$m;
echo "\n";
echo $t;
echo "\n";
echo "$g+$m";//这样输出默认的是一个字符串，输出 10+20
//与或运算
echo "\n";

$aa=12;//1100
$bb=13;//1101
$cc=$aa|$bb;//转换成二进制后，指的是1这个位，其中任意一个位置是1，都为1。
$dd=$aa&$bb;//转换成二进制后，指的是1这个位，相同的为1；不同的为0；
echo $cc;
echo "\n";
echo $dd;
