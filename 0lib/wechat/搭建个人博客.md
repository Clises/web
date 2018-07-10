安装Git
前往Git官网下载相关版本压缩包，下载完成后解压安装。
安装Node.js
前往Node.js官方下载网站，下载Node.js官方安装包，下载完成后同样解压安装，此处安装不做阐述。

安装Hexo

到目前为止，安装Hexo所需要的环境已将安装完成，下一步只需要安装Hexo便可以了。
在命令行中输入：
```
$ npm install -g hexo-cli
```

创建Hexo文件夹
找到想要放置博客的文件夹，比如（F:\Hexo），在该目录下鼠标右击打开Gitbash工具，（右键菜单中没有该选项的可以用cmd命令cd等进入该文件夹）。执行下面的语句，会在F:\Hexo文件夹下创建node_modules文件夹：

```
$ hexo init
```


这里init后面可以跟文件目录，比如我想在F:\Hexo下创建博客文件夹，那么可以用下面的命令：
```
$ hexo init F:\Hexo
```


安装依赖包
在Hexo目录下，执行以下命令，你会发现F:\Hexo\node_modules目录下多了好多文件夹

```
$ npm install
```



本地调试
目前为止，已经搭建好自己的Hexo博客了，但是只能在本机上查看。执行以下两个命令（在F:\Hexo目录下），然后在浏览器中输入 localhost:4000 就可以看到自己的博客了

```
$ hexo generate 
$ hexo server
```

如何部署到github账户之上
注册github账户，新建一个repository仓库，对应名字是xxx.github.io

将本地的文件部署（上传）到Github账户中
编辑本地Hexo目录下文件_comfig.yml，在最后添加如下代码（在你修改时，把 xxx 要替换成你自己的用户名）


```
deploy:
    type: git
    repository: http://github.com/Gitzhaoyang/xxx.github.io.git
    branch: master
```



.yml文件对格式规范要求很严格，type: repository: branch: 前面有两个空格，冒号后面都有一个空格。

执行以下指令即可完成部署（如果提示错误，可以看下面注意）：


```
$ hexo generate 
$ hexo deploy
```

等待片刻之后，就可以在线去访问博客。
