<?php

function myTest()
{
    static $x=0;
    echo $x;
    $x++;
}

myTest();
myTest();
myTest();
//每次调用该函数时，该变量将会保留着函数前一次被调用时的值。
//该变量仍然是函数的局部变量。

?>