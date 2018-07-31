var b=null;  //初始复制为null，表明将要赋值为对象，
b=['name',122]
b=null;  //让b指向的对象为垃圾对象，准确的概念是被垃圾回收期回收
console.log(+new Array(017));//NaN




//输出的日志结果为 {}
var obj={};
obj.log=console.log;
obj.log.call(console,this);   //{}



