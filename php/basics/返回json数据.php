<?php
header("content-type:text/html;charset=utf-8");
$link=mysqli_connect("localhost","root","","user_info");
mysqli_query($link,"set names utf8");
$sql="select * from user_info";
$r=mysqli_query($link,$sql);
$arr=array();//开始转换
while ($row = mysqli_fetch_assoc($r)) {
    $arr[] = $row;
}
echo json_encode($arr);
mysqli_close($link);
?>
