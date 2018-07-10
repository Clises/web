<?php
/**
 * Created by PhpStorm.
 * User: 15318
 * Date: 2017/9/27
 * Time: 15:32
 */
/*魔术变量
 * php：当中提供的大量预定义变量，
 *位于某一个扩展库，先加载库，在编译的时候已经加载了，
 *
 */
//输出行号     _LINE_ ，在脚本中运行的时候，反应出当前在第几行
echo "这是第".__LINE__."行的数据";
//输出完整的文件名：_FILE_
echo "当前文件".__FILE__;
//文件所在的目录，_DIR_
echo "文件所在的目录".__DIR__;
//输出方法的名子
function hao(){
    echo "当前方法为：".__FUNCTION__;

}
//输出类名的
class  Doctor{
    function pring(){
        echo "当前的文件名".__CLASS__;
        echo "当前方法".__FUNCTION__;

    }
}
/*
 * 当一个类创建了，那么JAVA虚拟机JVM，就会默认给当前类创建一个无参数的方法，
 * 在任何程序里面都适合用。
 */
$myDoctor=new Doctor();
$myDoctor->pring();


