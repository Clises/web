import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
//创建组件
import song from '../components/header/song';
import list from '../components/header/list';
import play from '../components/header/play';

//配置路由
const routes = [
  { path: '/song', component: song},
  { path: '/list', component: list},
  { path: '/play/:aid', component: play},
  { path: '*', redirect: '/song' }   /*默认跳转路由*/
]
//出口   实例化
export default new Router({
  routes
})


