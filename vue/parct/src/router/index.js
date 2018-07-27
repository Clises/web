import Vue from 'vue'

import Router from 'vue-router'
Vue.use(Router);
//创建组件
import album from '../components/router/album';
import article from '../components/router/article';
import articleDetails from '../components/router/articleDetails';
import albumDetails from '../components/router/albumDetails';
import user from '../components/router/user';
import userid from '../components/router/user/userid';
import userlist from '../components/router/user/userlist';
//配置路由
const routes = [
  { path: '/album', component: album,name:'album'},
  { path: '/article', component: article},
  { path: '/articleDetails/:aid', component: articleDetails},
  { path: '/albumdetails', component: albumDetails},
  {
    path: '/user',
    component: user,
    children:[
      { path: 'userid', component: userid},
      { path: 'userlist', component: userlist}
    ]
  },
  { path: '*', redirect: '/article' }   /*默认跳转路由*/
]
//出口   实例化
export default new Router({
  routes
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




