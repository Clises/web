//基本用法
var f = v => v;
//等同于
var f = function(v) {
    return v;
};

//携带参数和不携带参数情况

var f = () => 5;
// 等同于
var f = function () { return 5 };

var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
    return num1 + num2;
};



//this 指向问题


function foo() {
    setTimeout(
        function () {
            console.log('id:', this.id);
        },100)
        // () => {
        // console.log('id:', this.id);
    // }, 100);
}

var id = 21;

foo.call({ id: 42 });