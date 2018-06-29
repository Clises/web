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







