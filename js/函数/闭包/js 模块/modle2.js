(function myModule(window) {
    var  msg='charlie';
    //操作数据的函数
    function doSomething() {
        console.log('doSomething()'+msg.toUpperCase())
    }
    function doOtherthing() {
        console.log('doOtherthis()'+msg.toLowerCase())
    }
//    向外暴露
window.myMoudle2={
        doSomething:doSomething,
        doOtherthing:doOtherthing
}
})(window)
