1.什么是 commonJS?

 commonJs为了弥补 js 没有标准的缺陷，提供类似 java php等语言的标准库。
 commonJs就是模块化的标准，nodejs 是 commonJs(模块化的实现)。
 
2.什么是nodeJs中的模块化？
  在 nodejs 模块分为两类 一类是核心模块；
  另一类是用户编写的模块 称为文件模块。
    核心模块部分在 Node 源代码的编译过程中，编译进了二进制执行文件。在 Node 进 程启动时，部分核心模块就被直接加载进内存中，所以这部分核心模块引入时，文件定位和 编译执行这两个步骤可以省略掉，并且在路径分析中优先判断，所以它的加载速度是最快的。 如:HTTP 模块 、URL 模块、Fs 模块都是 nodejs 内置的核心模块，可以直接引入使用。
    文件模块则是在运行时动态加载，需要完整的路径分析、文件定位、编译执行过程、 速度相比核心模块稍微慢一些，但是用的非常多。这些模块需要我们自己定义。接下来我 们看一下 nodejs 中的自定义模块。
    
3.CommonJS(Nodejs)中自定义模块的规定:

   我们可以把公共的功能 抽离成为一个单独的 js  文件 作为一个模块，默认情况下面这
 个模块里面的方法或者属性，外面是没法访问的。如果要让外部可以访问模块里面的方法或
 者属性，就必须在模块里面通过 exports 或者 module.exports 暴露属性或者方法。

   在需要使用这些模块的文件中，通过 require 的方式引入这个模块。这个时候就可以
 使用模块里面暴露的属性和方法。

   常见的几种形式：
  （1）直接引入模块
 ```
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
``` 
  （2）直接引入 node_modules 下的模块
```
// var foo=require('foo')
var bar=require('bar/bar.js')

/**
 foo默认在目录下没有,没有的话默认会在node_modules 中去找.
* */

// console.log(foo)
console.log(bar)
```
  （3）直接引入 node_modules 下文件夹的模块，通过 packjson 进行配置
```javascript
var nav=require('nav');
//nav 在根目录不存在，去node_modules ，找到了nav文件夹。 nav文件夹下面有package.json ，
//找 package.json 入口文件 "main": "nav.js",
console.log(nav.str);
//npm 安装的模块就是这样引入的。
//package.json      npm init  --yse       进入这个目录运行这个命令
```
   配置方式：在当前文件夹下的终端输入命令：npm init --yes
    
