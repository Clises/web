1. 请求数据的模板包括
    (1) vue-resource  官方提供的 vue的一个插件
    (2) axios
    (3) fetch-jsonp
1.1 var-resource使用
(1) 安装 vue-resouce
  npm install vue-resource --save
    -- save 写入 package.json 中,不然把项目发给别人会出问题
    
(2) main.js 引入  vue-resource
  import VueResource from 'vue-resource '
  
(3) 使用 Vue.use(VueResource);

(4) 在组件中使用  
this.$http.get(地址).then(function(){}) 请求数据

1.2 axios 使用
(1) 安装
   注意-- save
(2) 直接在子组件中调用 axios
    import Axios from 'axios';

(3) 请求数据

  

2. 父组件给子组件传值

2.1 
(1) 父组件调用子组件时 绑定动态属性
   <v-header :title="title" :run="run" :home="this"></v-header>
   
(2)在子组件里通过 props接收父组件传过来的数据
     props:['title','run','home']
   注意:验证父组件传递数据的合法性,使用 props:{} 一般在大公司需要受约束


3. 父子组件主动获取各自的数据和方法 
3.1 父组件主动获取子组件的数据和方法
(1)调用子组件的时候定义一个 ref
  <v-child ref="child"></v-child>
(2)在父组件里面通过以下两种方式调用子组件的数据和方法
this.$refs.child.属性
this.$refs.child.方法 

3.2 子组件主动获取父组件的数据和方法
this.$parent.属性
this.$parent.方法



4. 非父子组件通信
(1) 新建 js 文件,引入 vue 实例 vue 暴露这个实例

(2)在需要广播的地方引入刚才的实例

(3)通过 VueEmit.$emit('名称','数据')

(4)在接收数据的地方.$ on 接收广播的数据




5. vue路由

动态向根里挂载数据

(1) 安装
npm install vue-router
(2) 引入并 Vue.use(VueRouter)(main.js)


(3) 配置路由
   1. 创建组件 引入路由
   2. 定义路由(复制即可)
   3. 实例化 VueRouter
   4. 挂载
   5. 放在根组件中

//1.创建组件
import R from './components/R.vue';
import RR from './components/RR.vue';
//2.配置路由   注意：名字
const routes = [
  { path: '/R', component: R },
  { path: '/RR', component: RR },
  { path: '*', redirect: '/R' }   /*默认跳转路由*/
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})
//4、挂载路由
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
//5 <router-view></router-view> 放在 App.vue





6. 动态路由   get传值

(1)配置动态路由
  routes:[
  {path:'/user/:id',component:User}
  
  ]

(2)在对应页面
this.$route.params 获取动态路由的值






