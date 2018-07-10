<?php
$x=5; // 全局变量
function myTest()
{
    $y=10; // 局部变量
    echo "<p>Test variables inside the function:<p>";
    echo "Variable x is: $x";//x变量在函数外定义，无法在函数内使用，如果在函数中访问一个全局变量，需要使用global关键字。
    echo "<br>";
    echo "Variable y is: $y";
}
myTest();
echo "<p>Test variables outside the function:<p>";
echo "Variable x is: $x";
echo "<br>";
echo "Variable y is: $y";
?>

