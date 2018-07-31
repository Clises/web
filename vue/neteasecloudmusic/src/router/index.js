import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
//创建组件
import home from '@/components/home'
import my from '@/components/my';
import search from '@/components/search';
import play from '@/components/play';

//配置路由
const routes = [
  {path: '/my', component: my},
  {path:'/home',component:home},
  {path: '/search', component: search},
  {path: '/play/:aid', component: play},
  {path: '*', redirect: '/home'}   /*默认跳转路由*/
]
//出口   实例化
export default new Router({
  routes
})


