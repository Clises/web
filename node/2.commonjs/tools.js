//1、定义 tools 模块
var tools={
    add:function (x,y) {
        return x+y
    },
    sayHello:function () {
        return 'hello node'
    }
}

//2、暴露方法（两种形式）
//exports.tools=tools;
/*直接暴露出去 这个合理*/
module.exports=tools;
