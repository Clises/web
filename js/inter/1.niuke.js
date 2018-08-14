/*1.数字字符串拼接*/
function f1() {
    var msg='hello';
    for(var i=0;i<10;i++){
        var msg='hello'+i*2+i;
    }
    console.log(msg);//hello189
}
f1()

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

/*3.判断一个 js 对象是否是 Array*/
/**

* */
function f3() {
    let arr=[1,2,3,4,5];
    console.log(Object.prototype.toString.call(arr)==='[object Array]')

}
f3();



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

/* 2. noscript 代表元素在未被执行时替代内容(文本)*/

/*3. 变量声明被提前的问题*/
function f5() {
if (!"a" in window){
    var a=1;   //变量提前问题      undefined
}
console.log(a)
}
f5();

/* 4.document.getElementById的返回值的类型是 Object*/






