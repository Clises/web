#声明式渲染：
采用模板语法声明式地将数据渲染进DOM系统

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
#条件和循环
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














