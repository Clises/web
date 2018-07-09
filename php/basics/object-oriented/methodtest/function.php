<?php
//简单的函数调用
function aa()
{
    echo "Kai Jim Refsnes";
}

echo "My name is ";
aa();
//添加参数调用、带有返回值的方法
function huai($x,$y){
    $num=$x+$y;
    return $num;
}
$a=10;
$b=20;
?>
<?php
function bb($fname,$punctuation)
{
    echo $fname . " Refsnes" . $punctuation . "<br>";
}

echo "My name is ";
bb("Kai Jim",".");
echo "My sister's name is ";
bb("Hege","!");
echo "My brother's name is ";
bb("Ståle","?");
?>

