#什么是闭包
    大致有以下两种理解:  
      理解一:闭包是嵌套的内部函数      
      理解二:包含被引用变量(函数)的对象(极少数人)    
      也就是说闭包总是存在于嵌套的内部函数之中 
#如何产生闭包
    当一个嵌套的内部(子)函数引用了嵌套的外部的(父)函数的变量(函数)时,就产生了闭包
#产生闭包的条件
    1.函数嵌套
    2.内部函数引用了外部函数的数据(变量/函数)
#闭包的作用有哪些
    1.使用函数内部执行变量在函数执行完之后,仍然存活在内存之中(延长了局部变量的生命周期)
    2.让函数外部可以操作(读写)到函数内部的数据(变量/函数)
#闭包有什么特点
    - 占用更多内存
    - 不容易被释放
#如何查看闭包
    使用 chrome 调试查看
#实例
```javascript
    function fn1() {
        var a=2
        var b='abc'
         function fn2() {  //执行函数定义就会产生闭包(不用调用函数内部)     在函数定义之前
            console.log(a)
        }
/*
        这种定义是不会产生闭包的,因为函数还未声明,不去产生调用
        var fn2=function(){
            console.log(a)
        }
*/

        fn2()//调用内部函数
    }
    fn1()
```
![alt text](/Users/edz/Desktop/web/article/wechat/image/函数闭包.jpeg "Title")

#常见闭包
常见的闭包可分为以下两个情况:
   1.将函数作为另一个函数的返回值
   2.将函数作为实参传递给另一个函数调用
  ```javascript

    /*整个过程中值有一个闭包,将函数作为另一个函数的返回值*/
        function fn1() {
            var a=2;
            function fn2() {
                a++;
                console.log(a)
            }
            return fn2
        }
    var f=fn1();
    f(); //3
    f(); //4
//将函数作为实参传递给另一个函数调用
    function showDelay(msg,time) {
        setTimeout(function () {
            alert(msg)   //产生一个闭包
        },time)
    }
    showDelay("charlie",3000)

```




