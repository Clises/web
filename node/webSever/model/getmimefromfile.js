



//改成同步


// exports.getMime=function (fs,extname) {
//     console.log(1)
//     //异步执行
//     fs.readFile('./mime.json',function (err,data) {
//         if(err){
//             console.log('mime.json文件不存在');
//             return false;
//         }
//         // console.log(data.toString());
//
//         var Mimes=JSON.parse(data.toString());
//
//         //console.log(Mimes[extname]);
//         console.log('2');
//         return Mimes[extname] || 'text/html';
//
//     })
//     console.log('3');
// }







//同步请求

exports.getMime=function(fs,extname){  /*获取后缀名的方法*/


    //把读取数据改成同步
    var data=fs.readFileSync('./mime.json');
    //data.toString() 转换成json字符串
    var Mimes=JSON.parse(data.toString());  /*把json字符串转换成json对象*/
    return Mimes[extname] || 'text/html';


}
