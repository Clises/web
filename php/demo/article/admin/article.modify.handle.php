<?php
	require_once('../connect.php');
	//把传递过来的信息入库，在入库之前对所有的信息进行校验。
	//print_r($_POST);

	if(!isset($_POST['title']) || empty($_POST['title'])) {
		echo "<script>alert('标题不$connec能为空'); window.history.go(-1);</script>";
		mysqli_close($connec);
		exit;
	}

	$id = $_POST['id'];
	$title = $_POST['title'];
	$author = $_POST['author'];
	$description = $_POST['description'];
	$content = $_POST['content'];
	$dateline = time();

	$updatesql = "update article set title = '$title',author = '$author',description = '$description',content = '$content',dateline=$dateline where id=$id";
	//echo $updatesql;

	if(mysqli_query($connec,$updatesql) && mysqli_affected_rows($connec)) {
		echo "<script>alert('修改文章成功'); window.location.href='article.manage.php'</script>";
	} else {
		echo "<script>alert('修改文章失败'); window.location.href='article.manage.php'</script>";
	}

	mysqli_close($connec);
?>