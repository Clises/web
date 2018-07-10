<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<!--Php可以嵌入到HTML文件的任意一个位置-->
<form method="post" action="<?PHP $_SERVER['PHP_SELF']?>">
    提交的内容：<input type="text"name="fname"/>
    <input type="submit">
</form>
<?php
$name=$_POST['fname'];
//输出
echo $name;
?>
</body>
</html>





