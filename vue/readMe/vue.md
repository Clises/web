1. 
1.1 声明式渲染：
采用模板语法声明式地将数据渲染进DOM系统,初始化根实例, vue 将会自动将数据绑定到 DOM 模板上
```vue
<div id="app">
  {{ message }}
</div>
```
```javascript
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```
1.2 双向数据绑定






2. 指令
一种特殊的自定义行间属性,指令表达式的值改变时相应地将某些行为应用到 DOM 上
内置指令包括:

```
v-bind：动态绑定数据。简写为“:” 。=> 以后的:class="{red:boolean}"
v-on ：绑定时间监听器。简写为“@”，例：@click="xxx"；
v-text ：更新数据，会覆盖已有结构。类似{{ msg }} ；
v-show ：根据值的真假，切换元素的display属性；
v-if ：根据值的真假，切换元素会被销毁、重建； => 在dom中已消失
v-else-if ：多条件判断，为真则渲染；
v-else ：条件都不符合时渲染；
v-for ：基于源数据多次渲染元素或模块；
v-model ：在表单控件元素（input等）上创建双向数据绑定（数据源）；
v-pre ：跳过元素和子元素的编译过程；
v-once ：只渲染一次，随后数据更新也不重新渲染；
v-cloak ：隐藏未编译的Mustache语法，在css中设置[v-cloak]{display:none;}

```
























2. 条件和循环
控制元素是否显示  

#双向数据绑定
v-model指令进行双向数据绑定。  
#组件化应用的构建

#创建vue实例
vm 变量名表示 Vue实例
##数据和方法
当实例创建，向vue的响应式系统中加入了其data对象中能找的所有属性。当这些属性变化时，试图也会随着变化，匹配更新为新的值

```javascript
// 我们的数据对象
var data = { a: 1 }

// 该对象被加入到一个 Vue 实例中
var vm = new Vue({
  data: data
})

// 获得这个实例上的属性
// 返回源数据中对应的字段
vm.a == data.a // => true

// 设置属性也会影响到原始数据
vm.a = 2
data.a // => 2

// ……反之亦然
data.a = 3
vm.a // => 3

```














