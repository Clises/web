import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
//创建组件
import News from '../components/News';
import Details from '../components/Details';
//配置路由
const routes = [
  { path: '/news', component: News },
  { path: '/details/:aid', component: Details },
  { path: '*', redirect: '/news' }   /*默认跳转路由*/
]
//出口   实例化
export default new Router({
  routes
})
