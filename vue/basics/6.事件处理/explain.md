#监听事件
可以用 v-on 指令监听 DOM 事件，并在触发时运行一些 JavaScript 代码  
#事件处理方法
使用 v-on 接受一个需要调用的方法名称

#内联处理器中的方法
在内联 js 语句中调用方法
```html
<div id="example-2">
  <!-- `greet` 是在下面定义的方法名 -->
  <button v-on:click="greet">Greet</button>
</div>
```
```javascript
var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  // 在 `methods` 对象中定义方法
  methods: {
    greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})

// 也可以用 JavaScript 直接调用方法
example2.greet() // => 'Hello Vue.js!'

```

#内敛处理器中的方法(内敛 js语句中直接调用方法)
```html
<div id="example-3">
  <button v-on:click="say('hi')">Say hi</button>
  <button v-on:click="say('what')">Say what</button>
</div>
```
```javascript
new Vue({
  el: '#example-3',
  methods: {
    say: function (message) {
      alert(message)
    }
  }
})

```
###在内敛语句中访问原生 DOM 事件

```html
<button v-on:click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>

```
```javascript
methods: {
  warn: function (message, event) {
    // 现在我们可以访问原生事件对象
    if (event) event.preventDefault()
    alert(message)
  }
}


```



#事件修饰符
在事件处理程序中调用 event.preventDefault() 或 event.stopPropagation() 是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。



#按键修饰符
在监听键盘事件时,我们经常需要检查常见的建值,使用 v-on 在监听键盘事件时添加按键修饰符
#自动匹配按键修饰符








