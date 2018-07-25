// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//使用 vue-resource/**/
import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


// import VueRouter from 'vue-router'
/*
//1.创建组件
import R from './components/R.vue';
import RR from './components/RR.vue';
import Content from './components/Content.vue';
import Pcontent from './components/Pcontent.vue';

//2.配置路由   注意：名字
const routes = [
  { path: '/R', component: R },
  { path: '/RR', component: RR },
  { path: '/Content/:aid', component: Content },
  { path: '/Pcontent', component: Pcontent },
  { path: '*', redirect: '/R' }   /!*默认跳转路由*!/
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

*/




