const fs =require('fs')
readStream=fs.createReadStream('charlie.txt');
var str='';
var count=0;
readStream.on('data',function (chunk) {
    str+=chunk;
    count++
})

// 读取完成
readStream.on('end',function (chunk) {
    console.log(count)
    console.log(str)
})



//读取失败
readStream.on('error',function (err) {
    console.log(err)

})
