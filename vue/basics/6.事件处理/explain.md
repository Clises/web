#监听事件
可以用 v-on 指令监听 DOM 事件，并在触发时运行一些 JavaScript 代码  




#事件处理方法




#内联处理器中的方法
在内联 js 语句中调用方法



#事件修饰符
在事件处理程序中调用 event.preventDefault() 或 event.stopPropagation() 是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。

