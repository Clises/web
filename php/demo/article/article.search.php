<?php
	require_once('connect.php');
	$key = $_GET['key'];
	$sql = "select * from article where title like '%$key%' order by dateline desc";
	$query = mysqli_query($connec,$sql);
	if($query && mysqli_num_rows($query)) {
		while($row = mysqli_fetch_assoc($query)) {
			$data[] = $row;
		}
	} else {
		$data = [];
	}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>文章发布系统</title>
	<meta name="keywords" content=""/>
	<meta name="description" content="文章发布系统"/>
	<link rel="stylesheet" href="default.css" type="text/css">
</head>
<body>
	<div id="wrapper">
		<div id="header">
			<div id="logo">
				<h1><a href="#">php与mysqli<sup></sup></a></h1>
				<h2></h2>
			</div>

			<div id="menu">
				<ul>
					<li class="active"><a href="article.list.php">文章</a></li>
					<li><a href="about.php">关于我们</a></li>
					<li><a href="contact.php">联系我们</a></li>
				</ul>
			</div>
		</div>
	</div>

	<div id="page">
		<div id="content">
			<?php
				if(empty($data)) {
					echo "当前没有文章，请管理员在后台添加文章";
				} else {
					foreach ($data as $value) {
			?>
				
				<div class="post">
					<h1 class="title"><?php echo $value['title']; ?><span style="color:#CCC; font-size:14px;">　　作者：<?php echo $value['author'];?></span></h1>
					<div class="entry">
						<?php echo $value['description']; ?>
					</div>
					<div class="meta">
						<p class="links"><a href="article.show.php?id=<?php echo $value['id']; ?>" class="more">查看详细</a>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;</p>
					</div>
				</div>

			<?php
					}
				}
			?>
		</div>

		<div id="sidebar">
			<ul>
				<li id="search">
					<h2><b class="text1">Search</b></h2>
					<form action="article.search.php" method="get">
						<fieldset>
							<input type="text" id="s" name="key" value="">
							<input type="submit" id="x" value="Search">
						</fieldset>
					</form>
				</li>
			</ul>
		</div>

		<div style="clear: both;">&nbsp;</div>
	</div>

</body>
</html>