import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
//创建组件
import Home from '@/components/home'
import song from '@/components/song';
import list from '@/components/list';
import play from '@/components/play';

//配置路由
const routes = [
  {path:'/home',component:Home},
  {path: '/song', component: song},
  {path: '/list', component: list},
  {path: '/play/:aid', component: play},
  {path: '*', redirect: '/Home'}   /*默认跳转路由*/
]
//出口   实例化
export default new Router({
  routes
})


