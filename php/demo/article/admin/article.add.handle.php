<?php
	require_once('../connect.php');
	//把传递过来的信息入库，在入库之前对所有的信息进行校验。
	//print_r($_POST);

	if(!isset($_POST['title']) || empty($_POST['title'])) {
		echo "<script>alert('标题不能为空'); window.location.href='article.add.php'</script>";
	}
	$title = $_POST['title'];
	$author = $_POST['author'];
	$description = $_POST['description'];
	$content = $_POST['content'];
	$dateline = time();

	$insertsql = "INSERT INTO article(title,author,description,content,dateline) VALUES('$title','$author','$description','$content',$dateline)";

//	echo $insertsql ;


	if(mysqli_query($connec,$insertsql)){
		echo "<script>alert('发布文章成功'); window.location.href='article.manage.php'</script>";
	} else {
		echo "<script>alert('发布文章失败'); window.location.href='article.manage.php'</script>";
	}

	mysqli_close($connec);
?>