1 组件注册

1.1组件名:
在注册一个组件的时候,我们始终需要给它一个名字,在学习全局注册就已经接触到了
自定义组件名:遵循w3c 规范中的自定义组件名(名字全小写必须包含一个连字符)

1.1.1定义组件名的两种方式
  使用 kebab-case 小写形式
  使用 PascalCase 驼峰形式
  

1.2 全局注册
  ```html
<div id="app-1">
  <global></global>
  <local></local>
</div>

<script>
//全局注册
Vue.component('global',{
    template:'<div>这是一个全局注册组件</div>'
})
//创建根实例
new Vue({
    el:"#app-1"
})
</script>

```


1.3 局部注册

```html
<div id="app-2">
  <global></global>
  <local></local>
</div>

<script>
//局部注册
var Child={
    template:'<div>这是一个局部注册组件</div>'
}
new Vue({
    el:"#app-2",
    components:{
        //引用局部组件
        'local': Child 
    }
})
</script>

```
子组件之间的嵌套互相使用,后期看

1.4 模块系统暂时不看





2.prop
2.1 prop 的大小写
  使用 kebab-case(短横线分割命名)
  
2.2 prop 类型

列出prop:props: ['title', 'likes', 'isPublished', 'commentIds', 'author']
以对象形式列出 prop:

```html
props: {
  title: String,
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: Object
}

```







