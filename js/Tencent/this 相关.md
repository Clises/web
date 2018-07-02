#this的绑定分类
关于 this绑定,无非就是分为以下几类,在实际操作中,逐层进行判断,才不至于混淆;
  默认绑定:没人绑定  this=>window
  隐式绑定:谁调用this指向谁
  显示绑定:bind apply  call
  new 绑定:优先级最高

1.默认绑定,在全局环境下和调用普通函数的情况

```javascript
//全局环境下, this指向的就是 window
    var name='window';
    function show() {
    var name='show';
    console.log(this.name)
    }
    show()  //window
//普通函数调用,也是指向 window
    var obj={
    name:'obj',
        tellme:function () {
            setTimeout(function () {
console.log(this)
            },1000)
        }
    }

    obj.tellme()//window
```

2.隐式绑定 (函数作为对象的一个属性,谁去调用它this 就指向谁)

```javascript
    var obj={
        name:'obj',
        show:function () {
            console.log(this.name)
        }
    }
    obj.show()// obj*/
```

3.显式绑定使用bind apply  call
bind 返回带有一个明确this指向的函数
apply call 在函数执行的时候改变this指向

```javascript
window.name='window'
    function show() {
        console.log(this.name)
    }
    var obj={
        name:'obj',
        show:show
    }
    var obj1={
        name:'obj1'
    }
    obj.show()  //obj
    obj.show=show.bind(window)  //window     在 bind 绑定之后是不能改变 this 指向的
    var newShow=obj.show;
    newShow.call(obj);
    show.call(obj1)  //obj1

```
4.new 绑定(使用构造函数创建对象,this 指向的就是 new 出来的对象)
```javascript
function Preson() {
        ctx={};
        this.name=name
    }
    var p=new Preson('wxd')
    console.log(p);  //Preson
```
####经典面试题

```
    var a=111
    var b=222
    function test() {
        var a=123
        var b=456
        console.log(this.a)//undefined
        console.log(this.b)//undefined
    }
    var n=new test()  //此时this指向的n
    console.log(n.a)//undefined
    console.log(n.b)//undefined

```
这是最常见的使用以构造函数创建对象的方式来判断 this 指向的相关面试题,在进行实例化之后, this势必指向的是n;只能通过 n 来掉用函数的变量值











