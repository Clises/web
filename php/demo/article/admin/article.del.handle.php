<?php
	require_once('../connect.php');

	$id = intval($_GET['id']);
	$deletesql = "delete from article where id=$id";
	if(mysqli_query($connec,$deletesql)) {
		echo "<script>alert('删除文章成功'); window.location.href='article.manage.php'</script>";
	} else {
		echo "<script>alert('删除文章失败'); window.location.href='article.manage.php'</script>";
	}
?>