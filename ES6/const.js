

//const 声明一个只读的常量,一旦声明,常量的值不会改变
const i=3;
i
i=4;
console.log(i)  // 报错
const foo;//报错

//const作用域与 let 相同只在声明所在的块级作用域内有效

if(true){
    const MAX=5
}
console.log(MAX) //报错



//声明的常量也不提升,在声明之后使用
if (true) {
    console.log(MAX); // ReferenceError
    const MAX = 5;
}

//const声明的常量，也与let一样不可重复声明。
var message = "Hello!";
let age = 25;

// 以下两行都会报错
const message = "Goodbye!";
const age = 30;
