<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>发布文章</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="文章发布系统——后台管理系统">
    <meta name="author" content="DreamBoy">
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="../myCss/style.css">
</head>
<body>
<div class="container">
    <div class="page-header ex-page-header">
        <h1 class="title">文章发布系统<small>  ——后台管理系统</small></h1>
    </div>

    <div class="body-container">
        <div class="row">
            <div class="col-md-2">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <span class="glyphicon glyphicon-th-list" aria-hidden="true"></span>
                    </div>

                    <div class="list-group">
                        <a href="article.add.php" class="list-group-item active">发布文章</a>
                        <a href="article.manage.php" class="list-group-item">管理文章</a>
                    </div>
                </div>
            </div>

            <div class="col-md-10">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>发布文章</h4>
                    </div>

                    <div class="panel-body">
                        <form method="post" action="article.add.handle.php" class="form-horizontal">
                            <div class="form-group">
                                <label for="article-title" class="col-sm-2 control-label">标题</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="article-title" placeholder="Title" name="title">
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="article-author" class="col-sm-2 control-label">作者</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="article-author" placeholder="Author" name="author">
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="article-des" class="col-sm-2 control-label">简介</label>
                                <div class="col-sm-10">
                                    <textarea name="description" id="article-des" cols="30" rows="5" class="form-control"></textarea>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="article-content" class="col-sm-2 control-label">内容</label>
                                <div class="col-sm-10">
                                    <textarea name="content" id="article-content" cols="30" rows="15" class="form-control"></textarea>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-sm-offset-2 col-sm-10">
                                    <button type="submit" class="btn btn-default">提交</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

</body>
</html>