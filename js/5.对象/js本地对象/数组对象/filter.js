
// https://www.cnblogs.com/cjx-work/p/8052865.html




// 在一个Array中，删掉偶数，只保留奇数，可以这么写
var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x) {
    return x % 2 !== 0;
});
console.log(r)
// 把一个Array中的空字符串删掉：
var arr = ['A', '', 'B', null, undefined, 'C', '  '];
var r = arr.filter(function (s) {
    return s && s.trim(); // 注意：IE9以下的版本没有trim()方法
})
console.log(r)


// 回调函数
var arr = ['A', 'B', 'C'];
var r = arr.filter(function (element, index, self) {
    // console.log(element); // 依次打印'A', 'B', 'C'
    // console.log(index); // 依次打印0, 1, 2
    // console.log(self); // self就是变量arr
    return true;
});

//去除重复元素
var
    r,
    arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
r = arr.filter(function (element, index, self) {
    return self.indexOf(element) === index;      //indexof总是返回第一个元素的位置，后续的重复元素位置与indexof返回的位置不相等
});
console.log(r.toString())