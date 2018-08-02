1. fs.stat 检测是文件还是目录
```javascript
const fs = require('fs')
fs.stat('hello.js', (error, stats) =>{ if (error){
console .log(error) } else {
console .log(stats)
console .log(`文件: ${stats.isFile()}` )
console .log(`目录: ${stats.isDirectory()}` ) }
})
```
2. fs.mkdir 创建目录
```javascript
const fs = require('fs')
fs.mkdir('logs', (error) => { if (error){
console .log(error) } else {
console .log('成功创 建目录:logs' )
} })
```

3.fs.writeFile 创建写入文件
```javascript
fs.writeFile('logs/hello.log', '您好 ~ \n', (error) => {
if(error) {
console .log(error)
} else {
console .log('成功写 入文件' )
} })
```

4. fs.appendFile 追加文件
```javascript
 fs.appendFile('logs/hello.log', 'hello ~ \n', (error) => { if(error) {
console .log(error) } else {
console .log('成功写 入文件' ) }
})
```

5.fs.readFile 读取文件
```javascript
 const fs = require('fs')
 fs.readFile('logs/hello.log', 'utf8', (error, data) =>{ if (error) {
console .log(error) } else {
console .log(data) }
})
```
6.fs.readdir 读取目录
```javascript
const fs = require('fs')
fs.readdir('logs', (error, files) => { if (error) {
console .log(error)
} else {
console .log(files)
} })
```
7.fs.rename 重命名
```javascript
const fs = require('fs')
fs.rename('js/hello.log', 'js/greeting.log', (error) =>{
if (error) {
console .log(error)
} else {
console .log(' 重命名成功' )
} })
 
```
8. fs.rmdir 删除目录
```javascript
fs
.rmdir('logs', (error) =>{
if (error) {
console .log(error)
} else { console.log('成功的删除了目录:logs')
} })
```

9.fs.unlink 删除文件
```javascript
fs.unlink(`logs/${file}`, (error) => { if (error) {
console .log(error) } else {
console.log(`成功的删除了文件: ${file}`) }
})
```

10.fs.createReadStream 从文件流中读取数 据
```javascript
const fs = require('fs')
var fileReadStream = fs.createReadStream('data.json')
let count=0; var str='';
fileReadStream.on('data', (chunk) => {
console.log(`${ ++count } 接收到:${chunk.length}`);
str +=chunk })
fileReadStream.on('end', () => { console.log('--- 结束 ---'); console .log(coun t );
console .log(str ); })
fileReadStream.on('error', (error) => { console .log(error)
})
```


11. fs.createWriteStream 写入文件
```javascript
var fs = require("fs");
var data = '我是从数据库获取的数据，我要保存起来';
// 创建一个可以写入的流，写入到文件 output.txt 中
var writerStream = fs.createWriteStream('output.txt'); // 使用 utf8 编码写入数据
writerStream .write(data ,'UTF8' ); // 标记文件末尾
writerStream .end();
// 处理流事件 --> finish 事件
writerStream.on('finish', function() { /*finish - 所有数据已被写入到底层系统时触发。*/ console .log("写入完 成。" );
});
writerStream.on('error', function(err){
console.log(err.stack); });
console .log("程序执 行完毕" );
```

12. 管道流
```javascript
var fs = require("fs");
// 创建一个可读流
var readerStream = fs.createReadStream('input.txt'); // 创建一个可写流
var writerStream = fs.createWriteStream('output.txt');
// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中 readerStre am .pipe(writerStream );
console .log("程 序执行完毕" );
```
