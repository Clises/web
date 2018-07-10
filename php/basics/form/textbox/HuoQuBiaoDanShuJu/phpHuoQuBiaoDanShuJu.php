<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<!--php可以嵌入到HTML文件的任意一个位置-->
<form method="post" action="<?php $_SERVER['PHP_SELF'] ?>">
    提交的内容：<input type="text" name="xxx">
    <input type="submit">


</form>


<?php


/**
Created by PhpStorm
 * 收集HTML表单的数据
 * 表单中输入input的值
 */
$name=$_POST['xxx'];
echo $name;

?>



</body>
</html>




