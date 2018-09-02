
//按照对应位置对变量进行赋值
let[a,b,c]=[1,2,3];

//模式匹配
let[foo,[[baz],asd]]= [1, [[2], 3]];

let [ , , third] = ["foo", "bar", "baz"];
third // "baz"

let [x, , y] = [1, 2, 3];
x // 1
y // 3

let [head, ...tail] = [1, 2, 3, 4];
head // 1
tail // [2, 3, 4]

let [x, y, ...z] = ['a'];
x // "a"
y // undefined
z // []

//如果结构不成功返回undefined
let [foo] = [];
let [bar, foo] = [1];
//foo的值都会等于undefined。

//不完全解构
let [x, y] = [1, 2, 3];
x // 1
y // 2

let [a, [b], d] = [1, [2, 3], 4];
a // 1
b // 2
d // 4



//等号右边不是数组的情况
// 报错
let [foo] = 1;
let [foo] = false;
let [foo] = NaN;
let [foo] = undefined;
let [foo] = null;
let [foo] = {};



