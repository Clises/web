function myModule() {
    var  msg='charlie';
    //操作数据的函数
    function doSomething() {
         console.log('doSomething()'+msg.toUpperCase())
    }
    function doOtherthing() {
        console.log('doOtherthis()'+msg.toLowerCase())
    }
    //向外暴露对象(给外部方法)
    return {
        doSomething:doSomething,
        doOtherthing:doOtherthing
    }

}
