1. 请求数据的模板包括
    (1) vue-resource  官方提供的 vue的一个插件
    (2) axios
    (3) fetch-jsonp
1.1 vue-resource使用
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
   注意$ npm install axios -- save
(2) 直接在子组件中调用 axios
    import Axios from 'axios';

(3) 请求数据

  

2. 父组件给子组件传值
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

5.1 安装
npm install vue-router
5.2 引入并 Vue.use(VueRouter)(main.js)
5.3 使用
  1)创建组件
import R from './components/R.vue';
import RR from './components/RR.vue';
  2)配置路由   注意：名字
const routes = [
  { path: '/R', component: R },
  { path: '/RR', component: RR },
  { path: '*', redirect: '/R' }   /*默认跳转路由*/
]
  3)实例化VueRouter  注意：名字
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})
  4)挂载路由
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
  5)<router-view></router-view> 放在 App.vue


5.4 动态路由和使用get传值

  1.配置动态路由
    routes:[
    {path:'/user/:id',component:User}
    ]
    1.2在对应页面
    this.$route.params 获取动态路由的值
    
  2.使用 get 传值
   <router-link :to="'/albumDetails?id='+key">{{key}} {{item}}</router-link>





5.5 编程式导航
  (1)this.$router.push({path:'/ albumDetails?id=1'})
  (2)命名:{ path: '/album', component: album,name:'album'},
     导航方式:this.$router.push({path:'album'})
  
5.6 哈希模式改成 history 模式
  在路由实例化的时候添加:mode: 'history',
  不要去用.  


5.7 路由嵌套
在路由中嵌套子路由
```vuejs
  {
    path: '/user',
    component: user,
    children:[
      { path: 'userid', component: userid},
      { path: 'userlist', component: userlist}
    ]
  }

```


5.8 模块化路由

6. vuex
  专门为 vue.js应用程序开发的状态管理模式
  (1)vuex 解决组件之间同一状态的共享问题(解决不同组件之间的数据共享问题)
  (2)组件数据持久化.
  
新建文件夹
  src 下新建文件夹 vuex文件夹
  vuex 下新建store.js
  
安装 vuex 
  npm install vuex--save
  
  在刚才创建的 store.js 引入 vuex 并且 use它
  

定义数据

var state={
  count:1
}

定义方法

var mutations={
  incCount(){
    ++state.count;
  }
}

优点类似计算属性   ，  改变state里面的count数据的时候会触发 getters里面的方法 获取新的值 (基本用不到)
		var getters= {
		    computedCount: (state) => {
			return state.count*2
		    }
		}

Action 基本没有用
		Action 类似于 mutation，不同在于：
		Action 提交的是 mutation，而不是直接变更状态。
		Action 可以包含任意异步操作。
		var actions= {
		    incMutationsCount(context) {    /*因此你可以调用 context.commit 提交一个 mutation*/
			context.commit('incCount');    /*执行 mutations 里面的incCount方法 改变state里面的数据*/
		    }
		}


暴露
const store = new Vuex.Store({
  state,
  mutations
})

在组件中使用
  引入 store
  注册 import
  获取state里的数据:this.$store.state 数据
  触发mutations 改变数据
   



