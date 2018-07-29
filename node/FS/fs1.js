/**
* */
var fs=require('fs');
    //fs.stat判断文件类型
fs.stat('html',function (err,stats) {
    if (err){
        console.log(err)
        return false
    }
    console.log('文件',+stats.isFile());
    console.log('目录'+stats.isDirectory())
});

// fs.mkdir创建文件夹目录
fs.mkdir('css',function (err) {
    if (err){
        console.log(err)
        return false;
    }
    console.log('创建目录成功')
});

//fs.writeFile写入文件
fs.writeFile('charlie.txt','hello node',function (err) {
    if (err){
        console.log(err)
        return false
    }
    console.log('写入成功了.')
})

//fs.appendFile 追加文件
fs.appendFile('t1.txt','这是写入的内容',function (err) {
if (err){
    console.log(err)
    return false
}
console.log('写入成功')
});

//fs.readFile读取文件
fs.readFile('t1.txt',function (err,data) {
    if(err){
        console.log(err)
        return fales
    }
    // console.log('读取可以了')
    console.log(data.toString())
});

//fs.readdir 读取目录
fs.readdir('css',function (err,data) {
    if (err){
        console.log(err)
        return false
    }
    console.log(data)
});

// fs.rename 重命名
fs.rename('css/index.html','css/hahh.html',function (err) {
    if (err){
        return false
    }
    console.log('修改成功了')
});



//fs.rmdir 删除目录
fs.rmdir('html',function (err) {
    if(err){
        return false
    }
    console.log('删除成功了')
})



//fs.unlink 删除文件
fs.unlink('t1.txt',function (err) {
    if(err){
        return false
    }
    console.log('删除成功了')
})