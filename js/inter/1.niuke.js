/*1.数字字符串拼接*/
function f1() {
    var msg='hello';
    for(var i=0;i<10;i++){
        var msg='hello'+i*2+i;
    }
    console.log('数字字符串拼接问题'+msg);//hello189
}
f1()


/*-----------------------------------------------------------------------------*/
/*2.变量提前问题，但是跟随变量之后的函数没有被提前，函数声明可以提前，但是函数表达式不能提前*/
function f2() {
    (function () {
        var x=foo();
        var foo=function foo() {
            return "foobar"
        }
        return x
    })()
}
// f2()//foo is not a function



/*-----------------------------------------------------------------------------*/
/*3.判断一个 js 对象是否是 Array*/
/**

* */
function f3() {
    let arr=[1,2,3,4,5];
    console.log(Object.prototype.toString.call(arr)==='[object Array]')

}
f3();


/*-----------------------------------------------------------------------------*/
/*8/2*/
/*1.函数的传参作用域的问题*/
function f4() {
var foo={n:1};
(function (foo) { //形参同实参foo一样指向同一片内存空间在空间里n的值为1
    var foo; //变量提升
    console.log(foo.n);  //1
    foo.n=3;// 赋予新值3
    var foo={n:2}//从新赋值3
    console.log(foo.n)//2
})(foo);
    console.log(foo.n)//3 全局变量3
}
f4(); //1 2 3


/*-----------------------------------------------------------------------------*/
/* 2. noscript 代表元素在未被执行时替代内容(文本)*/

/*3. 变量声明被提前的问题*/
function f5() {
if (!"a" in window){
    var a=1;   //变量提前问题      undefined
}
console.log(a)
}
// f5();


/*-----------------------------------------------------------------------------*/
/* 4.document.getElementById的返回值的类型是 Object*/
function f6(){
    var arr=[];
    arr[0]=0;
    arr[1]=1;
    arr.foo='c'
    console.log('f6+'+arr.length) //2

}
f6()
/**
 本身数组就是对象，它另外有存储数据的特殊作用，除此之外，还是一对象。
 对象不能用length返回其拥有的属性数量
* */


/*-----------------------------------------------------------------------------*/
//forEach()
function f7() {
    var arr=[{a:1},{}];
    arr.forEach(function (item,idx) {
        item.b=idx
    })
    console.log('f7+'+arr)
}
/**
 forEach()是对数组中的每一项运行给定函数，回调函数的参数item为数组当前项，idx为当前索引
 f7是为数组每一项添加属性b，并属性b的值为索引值
* */
//[{a:1,b:0},{b:1}]   length=2
f7()



/*-----------------------------------------------------------------------------*/
/*变量提前，全局变量和局部变量问题*/
function f8() {
    (function () {
        var a=b=5;
    })()
    console.log(b)
    console.log(a)  // a is not defined
}
/*
*   var a=b=5 ;
*   先声明 var a=b
*   再声明 b=5为全局变量
* */
f8()




