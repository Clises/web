//1.判断创建的文件
var fs=require('fs')
//
// fs.stat('upload',function (err,stats) {
//     if (err){
//         fs.mkdir('upload',function (error) {
//             if (error){
//                 cosnole.log(error)
//                 return false
//             }
//             console.log('创建成功 ')
//         })
//     }else {
//         console.log(
//             '已经创建可以了。'
//         )
//         console.log(stats.isDirectory())
//     }
// })

//2.查看文件夹下的文件
/*
fs.readdir('css',function (err,files) {
    if (err)
    {
        console.log(err)
    }else {
        console.log(files)
        for (var i=0;i<files.length;i++){
            fs.stat(files[i],function (error,stats) {
                console.log(files[i])

            })
        }
    }

})
*/

//
var filesArr=[];
fs.readdir('html',function(error,files){
    if(error){
        console.log(error);

    }else{  /*判断是目录还是文件夹*/
        //console.log(files);  /*数组*/

        (function getFile(i){

            if(i==files.length){  /*循环结束*/
                console.log('目录：');
                console.log(filesArr);   /*打印出所有的目录*/
                return false;

            }
            //files[i]  =   css  js   news.html
            //注意：目录
            fs.stat('html/'+files[i],function(error,stats){  /*循环判断是目录还是文件  ---异步 错误写法*/

                if(stats.isDirectory()){ /*目录*/

                    filesArr.push (files[i]);  /*保存数据*/
                }
                //递归掉用
                getFile(i+1);
            })
        })(0)

    }


})










